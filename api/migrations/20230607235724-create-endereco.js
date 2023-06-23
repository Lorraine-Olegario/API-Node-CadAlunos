'use strict';

/** @type {import('sequelize-cli').Migration} */

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('addresses', {
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
        idStudent: {
            allowNull: false,
            type: Sequelize.INTEGER,
            references: {
                model: 'students',
                key: 'id'
            },
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE'
        },
        zip_code: {
            type: Sequelize.STRING
        },
        public_place: {
            type: Sequelize.STRING
        },
        neighborhood: {
            type: Sequelize.STRING
        },
        city: {
            type: Sequelize.STRING
        },
        state: {
            type: Sequelize.STRING
        },
        number: {
            type: Sequelize.STRING
        },
        complement: {
            type: Sequelize.STRING
        }
        });
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('addresses');
    }
};