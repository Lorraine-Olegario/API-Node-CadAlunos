'use strict';

/** @type {import('sequelize-cli').Migration} */

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('alunos', {
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
        matricula: {
            type: Sequelize.STRING
        },
        nome: {
            type: Sequelize.STRING
        },
        cpf: {
            type: Sequelize.STRING
        },
        data__nasc: {
            type: Sequelize.STRING
        }        
        });
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('alunos');
    }
};