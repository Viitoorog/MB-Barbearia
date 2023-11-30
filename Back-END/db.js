const Sequelize = require('sequelize')
const sequelize = new Sequelize('barbearia_bd', 'root', 'rodrigo1356', {
    dialect: 'mysql',
    host: 'localhost',
    port: 3306
});

module.exports = sequelize;