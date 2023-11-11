const Sequelize = require('sequelize');
const Agendamento = require('./modelAgendamento');
const sequelize = new Sequelize('barbearia_bd', 'root', '123456', {
  dialect: 'mysql',
});

const Profissional = sequelize.define('tab_profissional', {
  name_pro: Sequelize.STRING(50),
  email_pro: Sequelize.STRING(50),
  senha_pro: Sequelize.STRING(50),
  num_end_pro: Sequelize.STRING(5),
  rede_social_pro: Sequelize.STRING(100),
  end_pro: Sequelize.STRING(50),
  obs_pro: Sequelize.STRING(100),
  sexo_pro: Sequelize.STRING(1),
  telefone_pro: Sequelize.INTEGER(11),
  data_nasc_pro: Sequelize.DATEONLY
});

Profissional.hasMany(Agendamento);

sequelize.sync();

module.exports = Profissional;