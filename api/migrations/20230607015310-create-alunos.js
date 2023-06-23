'use strict';

/** @type {import('sequelize-cli').Migration} */

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('students', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },
        createdAt: {
            allowNull: false,
            type: Sequelize.DATE
        },
        updatedAt: {
            allowNull: false,
            type: Sequelize.DATE
        },
        registration: {
            type: Sequelize.STRING
        },
        name: {
            type: Sequelize.STRING
        },
        cpf: {
            type: Sequelize.STRING
        },
        date_birth: {
            type: Sequelize.STRING
        }        
        });
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('students');
    }
};