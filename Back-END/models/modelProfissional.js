const Sequelize = require('sequelize');
const Horario = require('./modelHorario');
// const Prohor = require('./');
const sequelize = new Sequelize('barbearia_bd', 'root', '123456', {
  dialect: 'mysql',
});

const Profissional = sequelize.define('tab_profissional', {
  id_pro: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  name_pro: Sequelize.STRING(50),
  email_pro: Sequelize.STRING(50),
  senha_pro: Sequelize.STRING(50),
  num_end_pro: Sequelize.STRING(5),
  rede_social_pro: Sequelize.STRING(100),
  end_pro: Sequelize.STRING(50),
  obs_pro: Sequelize.STRING(100),
  sexo_pro: Sequelize.STRING(1),
  telefone_pro: Sequelize.STRING(11), 
  data_nasc_pro: Sequelize.DATEONLY
});



sequelize.sync();

module.exports = Profissional;