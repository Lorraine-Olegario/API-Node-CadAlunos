'use strict';

/** @type {import('sequelize-cli').Migration} */

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('enderecos', {
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
        idAluno: {
            allowNull: false,
            type: Sequelize.INTEGER,
            references: {
                model: 'alunos',
                key: 'id'
            },
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE'
        },
        cep: {
            type: Sequelize.STRING
        },
        logradouro: {
            type: Sequelize.STRING
        },
        bairro: {
            type: Sequelize.STRING
        },
        cidade: {
            type: Sequelize.STRING
        },
        estado: {
            type: Sequelize.STRING
        },
        numero: {
            type: Sequelize.STRING
        },
        complemento: {
            type: Sequelize.STRING
        }
        });
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('enderecos');
    }
};