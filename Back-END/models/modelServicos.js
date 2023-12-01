const Sequelize = require('sequelize');
const sequelize = require('../db')

const Servicos = sequelize.define('tab_servico', {
  id_serv: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  tipo_corte: Sequelize.STRING(50),
  valor_serv: Sequelize.INTEGER(6),
  descricao_corte: Sequelize.STRING(100),
  tempo_corte: Sequelize.TIME,
});

// Servicos.create({
//   tipo_corte: 'social',
//   valor_serv: 40.00,
//   descricao_corte: 'com degrade e penteado',
//   tempo_corte: '10000',
// });

// Servicos.create({
//   tipo_corte: 'Corte Barba',
//   valor_serv: 80.00,
//   descricao_corte: 'aparar e alinhar barba',
//   tempo_corte: '20000',
// });

// Servicos.create({
//   tipo_corte: 'blackafro',
//   valor_serv: 40.00,
//   descricao_corte: 'com degrade e penteado',
//   tempo_corte: '13000',
// });

sequelize.sync();

module.exports = Servicos;