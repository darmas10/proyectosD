import { DataTypes, DOUBLE } from 'sequelize';
import sequelize from '../db/connection';

export const vheiculos = sequelize.define('vheiculo', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    matricula:{
        type:DataTypes.STRING,
    },

    marca:{
        type:DataTypes.STRING,
    },

    modelo:{
        type:DataTypes.STRING,
    },
    año:{
        type:DataTypes.STRING,
    },
    ubicacion:{
        type:DataTypes.STRING,
    },
    estado:{
        type:DataTypes.STRING,
    },
}, )