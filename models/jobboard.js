'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class JobBoard extends Model {
    static associate(models) {
      JobBoard.belongsTo(models.User, { foreignKey: 'user_id' });
      JobBoard.hasMany(models.Application, { foreignKey: 'job_board_id' });
    }
  }
  JobBoard.init({
    user_id: DataTypes.INTEGER,
    title: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'JobBoard',
  });
  return JobBoard;
};
