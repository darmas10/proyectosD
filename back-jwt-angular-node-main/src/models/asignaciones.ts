import { DataTypes, DOUBLE } from 'sequelize';
import sequelize from '../db/connection';

export const asignaciones = sequelize.define('asignacion', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    conductor: {
        type: DataTypes.STRING
    },
    vehiculo:{
        type:DataTypes.STRING
    },
    fecha_inicio: {
        type: DataTypes.STRING
    },
    destino:{
        type:DataTypes.STRING
    },
    distancia:{
        type:DataTypes.INTEGER
    },
    estado:{
        type:DataTypes.STRING
    },
    


}, )