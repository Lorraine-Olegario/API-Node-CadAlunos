'use strict';

/** @type {import('sequelize-cli').Migration} */

module.exports = {
    async up (queryInterface, Sequelize) {        
        await queryInterface.bulkInsert('Enderecos', [
            {
				createdAt: new Date(),
				updatedAt: new Date(),
                idAluno: 1,
                cep: "12345-678",
				logradouro: "Rua das Flores",
				bairro: "Centro",
				cidade: "Cidade Nova",
				estado: "SP",
				numero: "123",
				complemento: "Apto 2",
            },
            {
				createdAt: new Date(),
				updatedAt: new Date(),
                idAluno: 2,
                cep: "54321-876",
				logradouro: "Avenida Principal",
				bairro: "Bairro Novo",
				cidade: "Cidade Velha",
				estado: "RJ",
				numero: "456",
				complemento: "",
            },
            {
				createdAt: new Date(),
				updatedAt: new Date(),
                idAluno: 3,
                cep: "98765-432",
				logradouro: "Rua das Palmeiras",
				bairro: "Jardim Primavera",
				cidade: "Cidade Alta",
				estado: "MG",
				numero: "789",
				complemento: "",
            },
            {
				createdAt: new Date(),
				updatedAt: new Date(),
                idAluno: 4,
                cep: "67890-123",
				logradouro: "Avenida Central",
				bairro: "Bairro Industrial",
				cidade: "Cidade Moderna",
				estado: "RS",
				numero: "987",
				complemento: "Sala 3",
            },
            {
				createdAt: new Date(),
				updatedAt: new Date(),
                idAluno: 5,
                cep: "54321-098",
				logradouro: "Rua dos Pinheiros",
				bairro: "Vila Nova",
				cidade: "Cidade Antiga",
				estado: "SC",
				numero: "654",
				complemento: "",
            }
        ], {});    
    },

    async down (queryInterface, Sequelize) {    
        await queryInterface.bulkDelete('Enderecos', null, {});         
    }
};
