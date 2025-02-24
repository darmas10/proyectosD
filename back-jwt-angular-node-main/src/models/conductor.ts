import { DataTypes, DOUBLE } from 'sequelize';
import sequelize from '../db/connection';

export const conductores = sequelize.define('conductores', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: DataTypes.STRING
    },
    licencia:{
        type:DataTypes.STRING
    },
    correo: {
        type: DataTypes.STRING
    },
    contacto:{
        type:DataTypes.STRING
    }

}, )