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

Profissional.hasMany(Agendamento, {
  foreignKey: 'idProfissional'
});

Agendamento.belongsTo(Profissional, {
  constraints: true,
  foreignKey: 'idProfissional'
})

Servicos.hasMany(Agendamento, {
  foreignKey: 'idServicos'
});

Horario.hasMany(Agendamento, {
  foreignKey: 'idHorario'
});

Cadastro.hasMany(Agendamento, {
  foreignKey: 'idCadastro'
});

sequelize.sync();

module.exports = Agendamento;