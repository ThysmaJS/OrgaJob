'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Application extends Model {
    static associate(models) {
      Application.belongsTo(models.JobBoard, { foreignKey: 'job_board_id' });
    }
  }
  Application.init({
    job_board_id: DataTypes.INTEGER,
    company: DataTypes.STRING,
    job_description: DataTypes.STRING,
    application_link: DataTypes.TEXT,
    application_date: DataTypes.DATE,
    status: DataTypes.STRING,
    interview_date: DataTypes.DATE,
    comments: DataTypes.TEXT,
    contact: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Application',
  });
  return Application;
};
