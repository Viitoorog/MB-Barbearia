const Sequelize = require('sequelize');
const Profissional = require('./modelProfissional');
const Agendamento = require('./modelAgendamento');
const sequelize = new Sequelize('barbearia_bd', 'root', '123456', {
  dialect: 'mysql',
});

const Horario = sequelize.define('tab_horario', {
  id_horario: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  horario_disponivel: Sequelize.DATE,
  horario_indisponivel: Sequelize.DATE,
});

sequelize.sync();

module.exports = Horario;