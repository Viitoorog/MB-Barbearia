const Sequelize = require('sequelize');
const sequelize = require('../db');

const Horario = sequelize.define('tab_horario', {
  id_horario: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  horario_disponivel: Sequelize.DATE,
  horario_indisponivel: Sequelize.DATE,
});

// Horario.create ({
//   horario_disponivel: '2023-08-15 18:30:00'  ,
//   horario_indisponivel: '2023-08-15 17:30:00',
// });

// Horario.create ({
//   horario_disponivel: '2023-07-23 17:30:00'  ,
//   horario_indisponivel: '2023-07-23 16:30:00',
// });

// Horario.create ({
//   horario_disponivel: '2023-06-09 16:30:00'  ,
//   horario_indisponivel: '2023-06-09 15:30:00',
// });

sequelize.sync();

module.exports = Horario;