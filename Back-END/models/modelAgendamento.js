const Sequelize = require('sequelize');
const Profissional = require('./modelProfissional');
const Servicos = require('./modelServicos');
const Horario = require('./modelHorario');
const sequelize = require('../db');

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

// Agendamento.create({
//   data_horario: '2023-08-15 18:30:00',
//   end_horario: 'Rua Etec',
//   id_pro: 1,
//   id_serv: 1,
//   id_horario: 1,
//   id_cli: 1
// });

// Agendamento.create({
//   data_horario: '2023-08-15 17:30:00',
//   end_horario: 'Rua Etec',
//   id_pro: 2,
//   id_serv: 2,
//   id_horario: 2,
//   id_cli: 2
// });

// Agendamento.create({
//   data_horario: '2023-08-15 16:30:00',
//   end_horario: 'Rua Etec',
//   id_pro: 3,
//   id_serv: 3,
//   id_horario: 3,
//   id_cli: 3
// });

sequelize.sync();

module.exports = Agendamento;
