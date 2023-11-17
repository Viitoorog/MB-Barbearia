const Sequelize = require('sequelize');
const Profissional = require('./modelProfissional');
const Servicos = require('./modelServicos');
const Horario = require('./modelHorario');
const sequelize = new Sequelize('barbearia_bd', 'root', '123456', {
  dialect: 'mysql',
});

const Agendamento = sequelize.define('tab_agendamento', {
  id_agendamento: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  data_horario: Sequelize.DATE,
  end_horario: Sequelize.STRING(50)
});

Profissional.hasMany(Agendamento, {
  foreignKey: 'id_pro',
  as: 'tab_agendamento'
});
Agendamento.belongsTo(Profissional, {
  foreignKey: 'id_pro',
  as: 'tab_profissional'
}); 

Servicos.hasMany(Agendamento, {
  foreignKey: 'id_serv',
  as: 'tab_agendamento'
});
Agendamento.belongsTo(Servicos, {
  foreignKey: 'id_serv',
  as: 'tab_servico'
});

Horario.hasMany(Agendamento, {
  foreignKey: 'id_horario',
  as: 'tab_agendamento'
});
Agendamento.belongsTo(Horario, {
  foreignKey: 'id_horario',
  as: 'tab_horario'
});

sequelize.sync();

module.exports = Agendamento;
