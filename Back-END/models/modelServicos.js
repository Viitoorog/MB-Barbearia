const Sequelize = require('sequelize');
const sequelize = new Sequelize('barbearia_bd', 'root', '123456', {
  dialect: 'mysql',
});

const Servicos = sequelize.define('tab_servico', {
  id_serv: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  tipo_corte: Sequelize.STRING(50),
  valor_serv: Sequelize.INTEGER(6),
  descricao_corte: Sequelize.STRING(100),
  tempo_corte: Sequelize.DataTypes.DATE,
});

sequelize.sync();

module.exports = Servicos;