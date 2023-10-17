const Sequelize = require('sequelize');
const sequelize = new Sequelize('barbearia_bd', 'root', '123456', {
  dialect: 'mysql',
});

const Servicos = sequelize.define('tab_servico', {
  tipo_corte: Sequelize.STRING(50),
  valor_serv: sequelize.Integer(6),
  descricao_corte: Sequelize.STRING(100),
  tempo_corte: sequelize.Date
});

sequelize.sync();

module.exports = Servicos;