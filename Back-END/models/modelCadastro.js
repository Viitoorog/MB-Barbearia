const Sequelize = require('sequelize');
const sequelize = require('../db');
const Agendamento = require('./modelAgendamento');
const Contato = require('./modelContatos');

const Cadastro = sequelize.define('tab_cliente', {
    id_cli: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name_cli: Sequelize.STRING(50),
    email_cli: Sequelize.STRING(50),
    cpf_cli: Sequelize.STRING(11),
    data_nasc_cli: Sequelize.DATEONLY,
    endereco_cli: Sequelize.STRING(50),
    telefone_cli: Sequelize.STRING(11),
    senha_cli: Sequelize.STRING(20)
});

Cadastro.hasMany(Contato, {
    foreignKey: 'id_cli',
    as: 'tab_fale_conosco'
});
Contato.belongsTo(Cadastro, {
    foreignKey: 'id_cli',
    as: 'tab_cliente'
});

Cadastro.hasMany(Agendamento, {
    foreignKey: 'id_cli',
    as: 'tab_agendamento'
});
Agendamento.belongsTo(Cadastro, {
    foreignKey: 'id_cli',
    as: 'tab_cliente'
});

// Cadastro.create({
//   name_cli:'Joãozinho',
//   email_cli:'joao@gmail.com',
//   cpf_cli: '123456789987',
//   telefone_cli: '123456789',
//   data_nasc_cli:'2023-07-13',
//   endereco_cli:'Lá Longe',
//   senha_cli: '123456'
// });

// Cadastro.create({
//   name_cli:'Adso Ignacia Paiva',
//   email_cli:'adso.paiva@geradornv.com.br',
//   cpf_cli: '94453261306',
//   telefone_cli: '89997132884',
//   data_nasc_cli:'1987-04-23',
//   endereco_cli:'Rua São Cosme',
//   senha_cli: '123456'
// });

// Cadastro.create({
//   name_cli:'Wesley da Souza Ervano',
//   email_cli:'wesley.ervano@geradornv.com.br',
//   cpf_cli: '71697045952',
//   telefone_cli: '48993595101',
//   data_nasc_cli:'1951-07-25',
//   endereco_cli:'Rua Oswaldo Simon',
//   senha_cli: '123456'
// });

sequelize.sync();

module.exports = Cadastro;