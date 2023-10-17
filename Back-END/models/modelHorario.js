const Sequelize = require('sequelize');
const sequelize = new Sequelize('barbearia_bd', 'root', '123456', {
  dialect: 'mysql',
});

const Horario = sequelize.define('tab_horario', {
  horario_disponivel: Sequelize.DATE,
  horario_indisponivel: Sequelize.DATE,
});

sequelize.sync();

module.exports = Horario;