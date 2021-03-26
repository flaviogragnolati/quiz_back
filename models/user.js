'use strict';
const { Model } = require('sequelize');
const bcrypt = require('bcrypt');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.belongsToMany(models.School, { through: 'School-User' });
      User.hasMany(models.Review);
      User.belongsToMany(models.Quiz, { through: models.Role });
      User.hasMany(models.QuizAttempt);
    }
  }
  User.init(
    {
      firstName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true,
        },
      },
      birthdate: {
        type: DataTypes.DATEONLY,
        allowNull: false,
        validate: {
          isDate: true,
        },
      },
      cellphone: {
        type: DataTypes.BIGINT,
        validate: {
          isNumeric: true,
        },
      },
      photo: {
        type: DataTypes.TEXT,
        validate: {
          isURL: true,
        },
        allowNull: true,
        defaultValue:
          'https://lh5.googleusercontent.com/-NVHdsx0r0Xk/TYyS1Qen3JI/AAAAAAAAAGU/AMvdDulXehs/s1600/zarpas.png',
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        set(value) {
          if (value) {
            const salt = bcrypt.genSaltSync(10);
            const hash = bcrypt.hashSync(value, salt);
            this.setDataValue('password', hash);
          }
        },
      },
    },
    {
      paranoid: true,
      sequelize,
      timestamps: true,
      modelName: 'User',
    }
  );
  return User;
};
