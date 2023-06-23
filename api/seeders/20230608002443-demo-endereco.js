'use strict';

/** @type {import('sequelize-cli').Migration} */

module.exports = {
    async up (queryInterface, Sequelize) {        
        await queryInterface.bulkInsert('addresses', [
            {
				createdAt: new Date(),
				updatedAt: new Date(),
                idStudent: 1,
                zip_code: "12345-678",
				public_place: "Rua das Flores",
				neighborhood: "Centro",
				city: "city Nova",
				state: "SP",
				number: "123",
				complement: "Apto 2",
            },
            {
				createdAt: new Date(),
				updatedAt: new Date(),
                idStudent: 2,
                zip_code: "54321-876",
				public_place: "Avenida Principal",
				neighborhood: "neighborhood Novo",
				city: "city Velha",
				state: "RJ",
				number: "456",
				complement: "",
            },
            {
				createdAt: new Date(),
				updatedAt: new Date(),
                idStudent: 3,
                zip_code: "98765-432",
				public_place: "Rua das Palmeiras",
				neighborhood: "Jardim Primavera",
				city: "city Alta",
				state: "MG",
				number: "789",
				complement: "",
            },
            {
				createdAt: new Date(),
				updatedAt: new Date(),
                idStudent: 4,
                zip_code: "67890-123",
				public_place: "Avenida Central",
				neighborhood: "neighborhood Industrial",
				city: "city Moderna",
				state: "RS",
				number: "987",
				complement: "Sala 3",
            },
            {
				createdAt: new Date(),
				updatedAt: new Date(),
                idStudent: 5,
                zip_code: "54321-098",
				public_place: "Rua dos Pinheiros",
				neighborhood: "Vila Nova",
				city: "city Antiga",
				state: "SC",
				number: "654",
				complement: "",
            }
        ], {});    
    },

    async down (queryInterface, Sequelize) {    
        await queryInterface.bulkDelete('addresses', null, {});         
    }
};
