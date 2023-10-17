const Sequelize = require('sequelize');
const sequelize = new Sequelize('barbearia_bd', 'root', '123456', {
  dialect: 'mysql',
});

const Agendamento = sequelize.define('tab_agendamento', {
  data_horario: Sequelize.DATE,
  end_horario: Sequelize.STRING(50)
});

sequelize.sync();

module.exports = Agendamento;