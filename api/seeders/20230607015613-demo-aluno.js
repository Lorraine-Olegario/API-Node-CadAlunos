'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up (queryInterface, Sequelize) {				
		await queryInterface.bulkInsert('students', [
			{
				registration: "00021864",
				name: "João Silva",
				cpf: "987.654.321-00",
				date_birth: "15-07-1990",				
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				registration: "00945",
				name: "Maria Santos",
				cpf: "456.789.123-00",
				date_birth: "02-11-1985",				
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				registration: "00015486",
				name: "Pedro Oliveira",
				cpf: "321.654.987-00",
				date_birth: "10-03-1998",				
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				registration: "0005489468",
				name: "Ana Ferreira",
				cpf: "654.321.987-00",
				date_birth: "25-09-1992",				
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				registration: "0015648",
				name: "Lucas Rodrigues",
				cpf: "789.123.456-00",
				date_birth: "08-05-1987",				
				createdAt: new Date(),
				updatedAt: new Date(),
			}
		], {});		
	},

	async down (queryInterface, Sequelize) {
		await queryInterface.bulkDelete('students', null, {});
	}
};
