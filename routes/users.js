const server = require('express').Router();
const { User, Role } = require('../models/index');
const { checkAdmin } = require('../utils/authTools.js');
const passport = require('passport');

//Las protecciones en las rutas las dejo comentadas

// Borrar un USER by ID - DELETE a /users/:id
server.delete(
  '/:id',
  // passport.authenticate('jwt', { session: false }),
  // checkAdmin,
  async (req, res) => {
    let { id } = req.params;
    if (!id) return res.status(400).send('No se recibio ID');
    const userToDestroy = await User.findByPk(id);
    if (!userToDestroy)
      return res.status(400).send('No existe el usuario a eliminar');
    const user = { ...userToDestroy.dataValues };
    const payload = {
      id: user.id,
      name: user.firstName + ' ' + user.lastName,
    };
    await userToDestroy.destroy();
    return res.status(200).send(payload);
  }
);

//Traer la info de un USER en particular - GET a /users/:id
server.get('/:id', async (req, res, next) => {
  try {
    if (req.params) {
      const { id } = req.params;
      const result = await User.findByPk(id);
      return res.json(result);
    } else {
      return res.sendStatus(401);
    }
  } catch (error) {
    console.error(error);
  }
});
server.get('/history/:id', async (req, res) => {
  const { id } = req.params;
  if (!id) return res.send(400).send({ message: 'El id es invalido' });
});

// Listar todos los USERS - GET a /users
server.get(
  '/',
  // passport.authenticate('jwt', { session: false }),
  // checkAdmin,
  (req, res, next) => {
    User.findAll({
      attributes: {
        exclude: ['password'],
      },
    })
      .then((user) => {
        return res.status(200).send(user);
      })
      .catch(next);
  }
);

// Devuelve USER por email - GET a /users/email/:id

server.get('/email/:id', async (req, res) => {
  let { id } = req.params;
  let { email } = req.query;

  if (!email) return res.status(400).send('¿Cuál es el email a buscar?');

  try {
    const userByEmail = await User.findOne({
      where: { email },
      attributes: {
        exclude: [
          'createdAt',
          'updatedAt',
          'resetPasswordExpires',
          'resetPasswordToken',
          'password',
          'deletedAt',
        ],
      },
    });

    if (userByEmail === null)
      return res.status(400).send('No existe usuario con ese mail');

    const userRole = await Role.findOne({
      where: { QuizId: id, UserId: userByEmail.id },
      attributes: {
        exclude: ['createdAt', 'updatedAt'],
      },
    });

    let response = {
      user: userByEmail,
      role: userRole,
    };

    return res.status(200).send(response);
  } catch (error) {
    console.error(error);
    return res.send(500).send('CATCH /users/email');
  }
});

// Editar un USER by ID - PUT a /users/:id

server.put(
  '/:id',
  // passport.authenticate('jwt', { session: false }),
  // checkAdmin,
  async (req, res) => {
    let { id } = req.params;
    let {
      firstName,
      lastName,
      email,
      birthdate,
      cellphone,
      password,
      photo,
    } = req.body;

    if (!id) return res.status(400).send('El usuario no existe');

    const userToEdit = await User.findByPk(id);

    const userEdited = await userToEdit.update(
      { firstName, lastName, email, birthdate, cellphone, password, photo },
      { where: { id } }
    );

    return res.status(200).json(userEdited);
  }
);

module.exports = server;
