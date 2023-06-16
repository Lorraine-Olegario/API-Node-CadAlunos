'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Alunos extends Model {
        static associate(models) {
            Alunos.hasOne(models.enderecos, {
                as: 'enderecos',
                foreignKey: 'idAluno',
                sourceKey: 'id'
            });
        }
    }

    Alunos.init({
        matricula: DataTypes.STRING,
        nome: DataTypes.STRING,
        cpf: DataTypes.STRING,
        data__nasc: DataTypes.STRING,        
    }, {
        sequelize,
        modelName: 'alunos',
    });

    return Alunos;
};