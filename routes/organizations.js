const server = require('express').Router();
const { School, Quiz, Subject, SchoolCode } = require('../models/index');
const { makeid } = require('../utils/index');
const sendMail = require('./mails');

// RUTA para BORRAR School - delete a /org/:id

server.delete(
  '/:id',
  // passport.authenticate('jwt', { session: false }),
  // checkAdmin,
  async (req, res) => {
    let { id } = req.params;

    if (!id) return res.status(400).send('No se recibió ID');

    const schoolToDestroy = await School.findByPk(id);

    if (!schoolToDestroy)
      return res.status(400).send('No existe la school a eliminar');

    const school = { ...schoolToDestroy.dataValues };
    const payload = {
      id: school.id,
      name: school.name,
    };
    await schoolToDestroy.destroy();
    return res.status(200).send(payload);
  }
);

// RUTA para LISTAR TODAS las School - get a /org

server.get('/', (req, res, next) => {
  School.findAll({
    attributes: {
      exclude: ['password'],
    },
  })
    .then((school) => {
      return res.status(200).send(school);
    })
    .catch(next);
});

// RUTA para LISTAR UNA School - get a /org/:id

server.get('/:id', (req, res, next) => {
  let { id } = req.params;
  School.findByPk(id, {
    attributes: {
      exclude: ['password'],
    },
  })
    .then((school) => {
      return res.status(200).send(school);
    })
    .catch(next);
});

// RUTA para listar todas las SUBJECTS de una SCHOOL - GET a /org/:id/subjects

server.get('/:id/subjects', async (req, res) => {
  let { id } = req.params;
  if (!id) return res.status(400).send('La Organización no existe');

  try {
    const subjects = await Subject.findAll(
      {
        where: {
          SchoolId: id,
        },
      },
      { raw: true }
    );

    return res.status(200).send(subjects);
  } catch (error) {
    console.error(error);
    return res.status(500).send('Error en la búsqueda de los subjects');
  }
});

//RUTA para listar todos los QUIZZES de una SCHOOL - get a /org/:id/quizzes

server.get('/:id/quizzes', async (req, res) => {
  let { id } = req.params;

  if (!id) return res.status(400).send('La Organización no existe');

  try {
    const quizzes = await Quiz.findAll({
      where: {
        SchoolId: id,
      },
      include: {
        model: Subject,
        attributes: {
          exclude: ['createdAt', 'updatedAt', 'SchoolId'],
        },
      },
    }); // Ver de traer solo los id

    let response = {
      quizzes: {},
    };

    response.quizzes.byId = quizzes;
    response.quizzes.allIds = quizzes.map((q) => {
      return q.id;
    });

    return res.status(200).send(response);
  } catch (error) {
    console.error(error);
    return res.status(500).send({ message: 'Error al buscar los quizzes' });
  }
});

// RUTA para AGREGAR/CREAR School - post a /org

server.post('/', async (req, res, next) => {
  let { name, email } = req.body;
  try {
    const schoolCodeGen = await SchoolCode.findOrCreate({
      where: {
        email,
      },
      defaults: {
        email,
        code: makeid(6),
      },
    });

    let payload = {
      user: {
        name,
        email,
        code: schoolCodeGen[0].code,
      },
      type: 'createSchool',
    };
    sendMail(payload);

    return res.status(200).send();
  } catch (error) {
    console.error(error);
    return res.status(400).send('El código no ha sido generado');
  }
});

// RUTA para EDITAR School - PUT a /org/:id

server.put('/:id', async (req, res) => {
  let { id } = req.params;
  let {
    name,
    email,
    description,
    city,
    country,
    logo,
    address,
    password,
  } = req.body;

  if (!id)
    return res
      .status(400)
      .send('Es necesario indicar la escuela a actualizar/modificar');

  const schoolToEdit = await School.findByPk(id);

  const schoolEdited = await schoolToEdit.update({
    name,
    email,
    description,
    city,
    country,
    logo,
    address,
    password,
  });

  return res.status(200).send(schoolEdited);
});

module.exports = server;
