import { Sequelize } from "sequelize";

const sequelize = new Sequelize('dariel', 'root', 'Josue588.+*-', {
    host: 'localhost',
    dialect: 'mysql',   
});

export default sequelize;