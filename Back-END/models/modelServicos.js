const Sequelize = require('sequelize');
const Agendamento = require('./modelAgendamento')
const sequelize = new Sequelize('barbearia_bd', 'root', '123456', {
  dialect: 'mysql',
});

const Servicos = sequelize.define('tab_servico', {
  tipo_corte: Sequelize.STRING(50),
  valor_serv: Sequelize.INTEGER(6),
  descricao_corte: Sequelize.STRING(100),
  tempo_corte: Sequelize.DataTypes.DATE,
});

Servicos.hasMany(Agendamento);
Agendamento.belongsTo(Servicos);

sequelize.sync();

module.exports = Servicos;