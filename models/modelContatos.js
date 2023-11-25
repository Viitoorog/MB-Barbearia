const Sequelize = require('sequelize');
const sequelize = require('../db');
const Cadastro = require('./modelCadastro');

const Contato = sequelize.define('tab_fale_conosco', {
  id_fale: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  name_fale: Sequelize.STRING(50),
  email_fale: Sequelize.STRING(30),
  assunto_fale: Sequelize.STRING(50),
  mensagem_fale: Sequelize.STRING,
});

Cadastro.hasMany(Contato, {
  foreignKey: 'id_cli',
  as: 'tab_fale_conosco'
});
Contato.belongsTo(Cadastro, {
  foreignKey: 'id_cli',
  as: 'tab_cliente'
});

// Contato.create({
//   name_fale: 'Dayvid da Conceição Assis', 
//   email_fale: 'dayvid.assis@geradornv.com.br',
//   assunto_fale: 'site fora do ar',
//   mensagem_fale: 'POSTO QUE O SITE ESTA FORA DO AR'
// });

// Contato.create({
//   name_fale: 'Dalva Camacho Fonseca', 
//   email_fale: 'dalva.fonseca@geradornv.com.br',
//   assunto_fale: 'site fora do ar',
//   mensagem_fale: 'POSTO QUE O SITE ESTA FORA DO AR'
// });

// Contato.create({
//   name_fale: 'Carlos Jesus Carino Salles', 
//   email_fale: 'carlos.salles@geradornv.com.br',
//   assunto_fale: 'site fora do ar',
//   mensagem_fale: 'QUERO CANCELAR PELA MA PRESTACAO DOS SERVICOS, POREM NAO TEM COMO ENTRAR EM CONTATO, POSTO QUE O SITE ESTA FORA DO AR.'
// });


sequelize.sync();

module.exports = Contato;