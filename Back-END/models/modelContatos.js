const Sequelize = require('sequelize');
const sequelize = new Sequelize('barbearia_bd', 'root', '123456', {
  dialect: 'mysql',
});

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

sequelize.sync();

module.exports = Contato;