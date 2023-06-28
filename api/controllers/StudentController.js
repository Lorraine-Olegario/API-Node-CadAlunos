const { where } = require('sequelize');
const database = require('../models');
const SearchStudent = require('./SearchStudent');

class StudentController 
{
    static async all(req, res, next)
    {
        try{
            const { q } = req.query;
            const searchFields = ['name', 'cpf', 'registration'];
            let where = {};

            if (q) {
                where[database.Sequelize.Op.or] = searchFields.map(field => ({
                    [field]: {
                        [database.Sequelize.Op.like]: `%${q}%`
                    }
                }));
            }

            const options = {
                include: [
                {
                    model: database.addresses,
                    as: 'addresses'
                }
                ],
                where: where
            };

            const allStudents = await database.students.findAll(options);
            return res.status(200).json(allStudents);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async find(req, res)
    {
        const {id} = req.params;
        try {
            const studentID = await database.students.findOne( {
                where: {
                    id: Number(id)
                },
                include: [{
                    model: database.addresses,
                    as: 'addresses'
                }]
            });
            return res.status(200).json(studentID);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async delete(req, res)
    {
        const { id } = req.params;
        try {
            await database.students.destroy({ where: { id: Number(id) } });            
            await database.addresses.destroy({ where: { idStudent: Number(id) } });
            return res.status(200).json({message: "Aluno deletedo"});
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async edit(req, res)
    {
        const { id } = req.params;
        const alunoInfo = req.body;
        try {
            await database.students.update( alunoInfo, { where: { id: Number(id) } } );
            const buscaEnd = await database.addresses.findOne( { where: { idStudent: Number(id) } });
            const adrss = { ...alunoInfo.addresses, idStudent: Number(id)};

            if (buscaEnd) {
                await database.addresses.update( adrss, { where: { idStudent: Number(id) } });
            } else {
                await database.addresses.create(adrss);
            }
            
            const studentUp = await database.students.findOne( {
                where: {
                    id: Number(id)
                },
                include: [{
                    model: database.addresses,
                    as: 'addresses'
                }]
            });

            return res.status(200).json(studentUp);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async create(req, res) {
        const newAluno = req.body;
        try {
            const createStudent = await database.students.create(newAluno);
            const createAddresses = { ...newAluno.addresses, idStudent: Number(createStudent.id)};            
            await database.addresses.create(createAddresses);               

            const studentUp = await database.students.findOne( {
                where: {
                    id: Number(createStudent.id)
                },
                include: [{
                    model: database.addresses,
                    as: 'addresses'
                }]
            });

            return res.status(200).json(studentUp);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }       
}

module.exports = StudentController