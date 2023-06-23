'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Students extends Model {
        static associate(models) {
            Students.hasOne(models.addresses, {
                as: 'addresses',
                foreignKey: 'idStudent',
                sourceKey: 'id'
            });
        }
    }

    Students.init({
        registration: DataTypes.STRING,
        name: DataTypes.STRING,
        cpf: DataTypes.STRING,
        date_birth: DataTypes.STRING,        
    }, {
        sequelize,
        modelName: 'students',
    });

    return Students;
};