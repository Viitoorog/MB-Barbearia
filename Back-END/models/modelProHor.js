const Sequelize = require('sequelize');
const sequelize = new Sequelize('barbearia_bd', 'root', '123456', {
  dialect: 'mysql',
});

const Prohor = sequelize.define('tab_prohor', {
  id_prohor: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  }
});

sequelize.sync();

module.exports = Prohor;