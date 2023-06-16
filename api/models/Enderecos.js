'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Enderecos extends Model {
        static associate(models) {
            Enderecos.belongsTo(models.alunos, {
                foreignKey : 'idAluno',
                targetKey: 'id'
            });
        }
    }
    
    Enderecos.init({
        idAluno: DataTypes.INTEGER,
        cep: DataTypes.STRING,
        logradouro: DataTypes.STRING,
        bairro: DataTypes.STRING,
        cidade: DataTypes.STRING,
        estado: DataTypes.STRING,
        numero: DataTypes.STRING,
        complemento: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'enderecos',
    });

    return Enderecos;
};