'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up (queryInterface, Sequelize) {				
		await queryInterface.bulkInsert('Alunos', [
			{
				matricula: "00021864",
				nome: "João Silva",
				cpf: "987.654.321-00",
				data__nasc: "15-07-1990",				
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				matricula: "00945",
				nome: "Maria Santos",
				cpf: "456.789.123-00",
				data__nasc: "02-11-1985",				
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				matricula: "00015486",
				nome: "Pedro Oliveira",
				cpf: "321.654.987-00",
				data__nasc: "10-03-1998",				
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				matricula: "0005489468",
				nome: "Ana Ferreira",
				cpf: "654.321.987-00",
				data__nasc: "25-09-1992",				
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				matricula: "0015648",
				nome: "Lucas Rodrigues",
				cpf: "789.123.456-00",
				data__nasc: "08-05-1987",				
				createdAt: new Date(),
				updatedAt: new Date(),
			}
		], {});		
	},

	async down (queryInterface, Sequelize) {
		await queryInterface.bulkDelete('Alunos', null, {});
	}
	};
