const { where } = require('sequelize');
const database = require('../models');

class AlunoController 
{
    static async all(req, res)
    {
        try{
            const allAlunos = await database.alunos.findAll({
                include: [{ 
                    model: database.enderecos, 
                    as: 'enderecos' 
                }]
            });
            return res.status(200).json(allAlunos);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async find(req, res)
    {
        const {id} = req.params;
        try {
            const alunoID = await database.alunos.findOne( {
                where: {
                    id: Number(id)
                },
                include: [{
                    model: database.enderecos,
                    as: 'enderecos'
                }]
            });
            return res.status(200).json(alunoID);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async delete(req, res)
    {
        const { id } = req.params;
        try {
            await database.alunos.destroy({
                where: {
                    id: Number(id)
                }
            });
            
            await database.enderecos.destroy({
                where: {
                    idAluno: Number(id)
                }
            });

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
            await database.alunos.update(
                alunoInfo,
                { 
                    where: {
                        id: Number(id)
                    }
                }
            );

            const buscaEnd = await database.enderecos.findOne( {
                where: {
                    idAluno: Number(id)
                }
            });

            const end = { ...alunoInfo.enderecos, idAluno: Number(id)};

            if (buscaEnd) {
                // const endEdit = { ...alunoInfo.enderecos, idAluno: Number(id)};
                await database.enderecos.update(
                    end,
                    { 
                        where: {
                            idAluno: Number(id)
                        }                        
                    }
                );
            } else {
                // const createEndereco = { ...alunoInfo.enderecos, idAluno: Number(id)};            
                await database.enderecos.create(end);
            }
            
            const alunoUp = await database.alunos.findOne( {
                where: {
                    id: Number(id)
                },
                include: [{
                    model: database.enderecos,
                    as: 'enderecos'
                }]
            });

            return res.status(200).json(alunoUp);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async create(req, res) {
        const newAluno = req.body;
        try {
            const createAluno = await database.alunos.create(newAluno);
            const createEndereco = { ...newAluno.enderecos, idAluno: Number(createAluno.id)};            
            await database.enderecos.create(createEndereco);               

            const alunoUp = await database.alunos.findOne( {
                where: {
                    id: Number(createAluno.id)
                },
                include: [{
                    model: database.enderecos,
                    as: 'enderecos'
                }]
            });

            return res.status(200).json(alunoUp);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }
      
}

module.exports = AlunoController