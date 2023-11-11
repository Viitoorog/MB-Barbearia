const Sequelize = require('sequelize');
const Horario = require('./modelHorario');
const Profissional = require('./modelProfissional');
const Cadastro = require('./modelCadastro');
const Servicos = require('./modelServicos');
const sequelize = new Sequelize('barbearia_bd', 'root', '123456', {
  dialect: 'mysql',
});

const Agendamento = sequelize.define('tab_agendamento', {
  data_horario: Sequelize.DATE,
  end_horario: Sequelize.STRING(50)
});

Agendamento.belongsTo(Cadastro);
Agendamento.belongsTo(Servicos);
Agendamento.belongsTo(Profissional);
Agendamento.belongsTo(Horario);

sequelize.sync();

module.exports = Agendamento;