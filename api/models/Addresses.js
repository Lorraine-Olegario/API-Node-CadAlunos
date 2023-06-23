'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Addresses extends Model {
        static associate(models) {
            Addresses.belongsTo(models.students, {
                foreignKey : 'idStudent',
                targetKey: 'id'
            });
        }
    }
    
    Addresses.init({
        idStudent: DataTypes.INTEGER,
        zip_code: DataTypes.STRING,
        public_place: DataTypes.STRING,
        neighborhood: DataTypes.STRING,
        city: DataTypes.STRING,
        state: DataTypes.STRING,
        number: DataTypes.STRING,
        complement: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'addresses',
    });

    return Addresses;
};