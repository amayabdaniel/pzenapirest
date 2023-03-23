const { Model, DataTypes, Sequelize } = require('sequelize');

const USER_TABLE = 'users';

const UserSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  email: {
    allowNull: false,
    type: DataTypes.STRING,
    unique: true,
  },
  password: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    defaultValue: Sequelize.NOW,
    field: 'created_at',
  },
}

class User extends Model {
  static associate(models) {
    // define association here
  }

  static config(sequelize) {
    return {
      sequelize,
      modelName: 'user',
      timestamps: false,
      tableName: USER_TABLE
    }
  }
}

module.exports = { User, UserSchema, USER_TABLE };
