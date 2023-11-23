const Sequelize = require('sequelize');
const Horario = require('./modelHorario');
const sequelize = require('../db');

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

Profissional.belongsToMany(Horario, {
  through: 'Profissional_Horario',
  foreingKey: 'id_prohor'
});
Horario.belongsToMany(Profissional, {
  through: 'Profissional_Horario',
  foreingKey: 'id_prohor'
});

// Profissional.create({
//   name_pro: 'Otavio da Sousa Marcello',
//   email_pro: 'otavio.marcello@geradornv.com.br',
//   senha_pro: '123',
//   num_end_pro: '135',
//   rede_social_pro: 'facebook',
//   end_pro: 'Rua Véu das Noivas',
//   obs_pro: 'so tranças',
//   sexo_pro: 'M',
//   telefone_pro: '11996692514', 
//   data_nasc_pro: '2004-11-29'  
// });

// Profissional.create({
//   name_pro: 'Irinea Mayerhofer Furtunato',
//   email_pro: 'irinea.furtunato@geradornv.com.br',
//   senha_pro: '123',
//   num_end_pro: '135',
//   rede_social_pro: 'facebook',
//   end_pro: 'Avenida Brasil',
//   obs_pro: 'só corte afro',
//   sexo_pro: 'F',
//   telefone_pro: '66997944776', 
//   data_nasc_pro: '2001-10-12'  
// });

// Profissional.create({
//   name_pro: 'Maycon Brito Brum',
//   email_pro: 'maycon.brum@geradornv.com.br',
//   senha_pro: '123',
//   num_end_pro: '305',
//   rede_social_pro: 'Instragram',
//   end_pro: 'Rua Cabo Serafim Nunes Neto',
//   obs_pro: 'só cabelo liso',
//   sexo_pro: 'M',
//   telefone_pro: '84973418713', 
//   data_nasc_pro: '2001-10-21'  
// });

sequelize.sync();

module.exports = Profissional;