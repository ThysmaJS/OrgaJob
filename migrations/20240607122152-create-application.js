'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Applications', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      job_board_id: {
        type: Sequelize.INTEGER
      },
      company: {
        type: Sequelize.STRING
      },
      job_description: {
        type: Sequelize.STRING
      },
      application_link: {
        type: Sequelize.TEXT
      },
      application_date: {
        type: Sequelize.DATE
      },
      status: {
        type: Sequelize.STRING
      },
      interview_date: {
        type: Sequelize.DATE
      },
      comments: {
        type: Sequelize.TEXT
      },
      contact: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Applications');
  }
};