const Sequelize = require('sequelize');
const Agendamento = require('./modelAgendamento')
const sequelize = new Sequelize('barbearia_bd', 'root', '123456', {
  dialect: 'mysql',
});

const Cadastro = sequelize.define('tab_cliente', {
  name_cli: Sequelize.STRING(50),
  email_cli: Sequelize.STRING(50),
  cpf_cli: Sequelize.STRING(11),
  data_nasc_cli: Sequelize.DATEONLY,
  endereco_cli: Sequelize.STRING(50),
  telefone_cli: Sequelize.STRING(11),
  senha_cli: Sequelize.STRING(20),
});

sequelize.sync();

module.exports = Cadastro;