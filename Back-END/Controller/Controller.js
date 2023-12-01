const port = 3000;
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const Contato = require('../models/modelContatos');
const Cadastro = require('../models/modelCadastro');
const Profissional = require('../models/modelProfissional');
const Servicos = require('../models/modelServicos');
const Horario = require('../models/modelHorario');
const Agendamento = require('../models/modelAgendamento');
const routes = require('../routes');
const path = require('path');
const Sequelize = require('sequelize');
const sequelize = require('../db');

app.set('view engine', 'ejs');
app.set('views', path.join('C:/Users/pc/Documents/Rodrigo/MB-Barbearia/', '/Agenda Barberia'));

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('C:/Users/pc/Documents/Rodrigo/MB-Barbearia/Front-END/img'));

let autentic;

app.get('/inserircon', (req, res) => {
  Contato.create({
    name_fale: 'Dayvid da Conceição Assis',
    email_fale: 'dayvid.assis@geradornv.com.br',
    assunto_fale: 'site fora do ar',
    mensagem_fale: 'POSTO QUE O SITE ESTA FORA DO AR'
  });
  res.redirect('/');
});
app.get('/inserirpro', (req, res) => {
  Profissional.bulkCreate([
    {
      name_pro: 'Otavio da Sousa Marcello',
      email_pro: 'otavio.marcello@geradornv.com.br',
      senha_pro: '123',
      num_end_pro: '135',
      rede_social_pro: 'facebook',
      end_pro: 'Rua Véu das Noivas',
      obs_pro: 'so tranças',
      sexo_pro: 'M',
      telefone_pro: '11996692514',
      data_nasc_pro: '2004-11-29'
    }, {
      name_pro: 'Irinea Mayerhofer Furtunato',
      email_pro: 'irinea.furtunato@geradornv.com.br',
      senha_pro: '123',
      num_end_pro: '135',
      rede_social_pro: 'facebook',
      end_pro: 'Avenida Brasil',
      obs_pro: 'só corte afro',
      sexo_pro: 'F',
      telefone_pro: '66997944776',
      data_nasc_pro: '2001-10-12'
    },
    {
      name_pro: 'Maycon Brito Brum',
      email_pro: 'maycon.brum@geradornv.com.br',
      senha_pro: '123',
      num_end_pro: '305',
      rede_social_pro: 'Instragram',
      end_pro: 'Rua Cabo Serafim Nunes Neto',
      obs_pro: 'só cabelo liso',
      sexo_pro: 'M',
      telefone_pro: '84973418713',
      data_nasc_pro: '2001-10-21'
    }
  ]);
  res.redirect('/');
});
app.get('/inserirser', (req, res) => {
  Servicos.bulkCreate([
    {
      tipo_corte: 'Corte na Navalha',
      valor_serv: 40.00,
      descricao_corte: 'com degrade e penteado',
      tempo_corte: '10000',
    },
    {
      tipo_corte: 'social',
      valor_serv: 35.00,
      descricao_corte: 'com degrade e penteado',
      tempo_corte: '4500',
    },
    {
      tipo_corte: 'Corte Barba',
      valor_serv: 25.00,
      descricao_corte: 'aparar e alinhar barba',
      tempo_corte: '3000',
    }
  ]);
  res.redirect('/');
});
app.get('/inserircli', (req, res) => {
  Cadastro.create({
    name_cli: 'Adso Ignacia Paiva',
    email_cli: 'adso.paiva@geradornv.com.br',
    cpf_cli: '94453261306',
    telefone_cli: '89997132884',
    data_nasc_cli: '1987-04-23',
    endereco_cli: 'Rua São Cosme',
    senha_cli: '123456'
  });
  res.redirect('/');
});
app.get('/inserirhor', (req, res) => {
  Horario.create({
    horario_disponivel: '2023-08-15 18:30:00',
    horario_indisponivel: '2023-08-15 17:30:00',
  });
  res.redirect('/');
});
app.get('/inserirage', (req, res) => {
  Agendamento.create({
    data_horario: '2023-08-15 18:30:00',
    end_horario: 'Rua Etec',
    id_pro: 1,
    id_serv: 1,
    id_horario: 1,
    id_cli: 1
  });
  res.redirect('/');
});

//Rota Index
app.use('/', routes);
app.use('/index', routes);

//Rota Contatos
app.use('/contatos', routes);

//Armazenamento atributos tabela Contatos
app.post('/contatos', async (req, res) => {
  let response = await Cadastro.findOne({
    where: { name_cli: req.body.name_fale, email_cli: req.body.email_fale }
  });
  if (response === null) {
    res.send(JSON.stringify('error'));
  } else {
    const { name_fale, email_fale, assunto_fale, mensagem_fale } = req.body;
    const id_cli = response.id_cli;

    Contato.create({ name_fale, email_fale, assunto_fale, mensagem_fale, id_cli })
      .then(() => {
        res.redirect('/');
      });
  };
});

//Armazenamento atributos tabela Contatos
app.post('/logado_contatos', async (req, res) => {
  let response = await Cadastro.findOne({
    where: { name_cli: req.body.name_fale, email_cli: req.body.email_fale }
  });
  if (response === null) {
    res.send(JSON.stringify('error'));
  } else {
    const { name_fale, email_fale, assunto_fale, mensagem_fale } = req.body;
    const id_cli = response.id_cli;

    Contato.create({ name_fale, email_fale, assunto_fale, mensagem_fale, id_cli })
      .then(() => {
        res.redirect('/logado_index');
      });
  };
});

//Rota Cadastro
app.use('/cadastro', routes);

//Requerimento Css
app.use('/cadastro.css', routes);

//Armazenamento dados tabela Cadastro
app.post('/cadastro', (req, res) => {
  const { name_cli, email_cli, cpf_cli, telefone_cli, data_nasc_cli, endereco_cli, senha_cli } = req.body;

  Cadastro.create({ name_cli, email_cli, cpf_cli, telefone_cli, data_nasc_cli, endereco_cli, senha_cli })
    .then(() => {
      res.redirect('/');
    })
});

//Rota Login
app.use('/login', routes);

//Requerimento Css do Login
app.use('/login.css', routes);

//Página Index com usuário logado
app.use('/indexlogado', routes);

//Requerimento Css administrador
app.use('/administrador.css', routes);

app.get('/administrador', async (req, res) => {
  try {
    const dadosModelo1 = await sequelize.query(
      'select date(tab_agendamentos.data_horario) as data, time(tab_agendamentos.data_horario) as hora, tab_agendamentos.end_horario, tab_profissionals.name_pro, tab_servicos.tipo_corte, tab_clientes.name_cli ' +
      'from tab_agendamentos ' +
      'inner join tab_profissionals on tab_agendamentos.id_pro = tab_profissionals.id_pro ' +
      'inner join tab_servicos on tab_agendamentos.id_serv = tab_servicos.id_serv ' +
      'inner join tab_clientes on tab_agendamentos.id_cli = tab_clientes.id_cli ' +
      'order by data, hora',
      { type: Sequelize.QueryTypes.SELECT }
    )
    // Agendamento.findAll({
    //   include: {
    //     model: Profissional,
    //     as: 'tab_profissional',
    //     attributes: ['name_pro'],
    //     required: true
    //   },
    //   include: {
    //     model: Servicos,
    //     as: 'tab_servico',
    //     attributes: ['tipo_corte'],
    //     required: true
    //   },
    //   include: {
    //     model: Cadastro,
    //     as: 'tab_cliente',
    //     attributes: ['name_cli'],
    //     required: true
    //   },
    // });

    // res.send(dadosModelo1);
    res.render('C:/Users/pc/Documents/Rodrigo/MB-Barbearia/Agenda Barberia/administrador.ejs', {dadosModelo1});
  } catch (error) {
    console.error('Erro ao buscar dados:', error);
    res.status(500).send('Erro ao buscar dados do banco de dados.');
  }
});

//Checagem no banco de dados na página de login
app.post('/login', async (req, res) => {
  try {
    const usuario = await Cadastro.findOne({
      where: { email_cli: req.body.email_cli, senha_cli: req.body.senha_cli }
    });
    if (usuario === null) {
      res.send(error);
    } else {
      res.redirect('/logado_index');
      autentic = usuario;
    }
  } catch (error) {
    const administrador = await Profissional.findOne({
      where: { email_pro: req.body.email_cli, senha_pro: req.body.senha_cli }
    });
    if (administrador === null) {
      res.send(JSON.stringify('error'));
    } else {
      res.redirect('/administrador');
    }
  }
});

//Logout da conta do usuário
app.get('/logout', (req, res) => {
  autentic = null;
  delete autentic;
  res.end;
  res.redirect('/');
})

//Rota Serviços
app.get('/servicos', routes);

//Rota Css arquivo teste
app.use('/teste.css', routes);

//Rota Cortes
app.get('/corte_barba', routes);
app.get('/corte_navalha', routes);
app.get('/corte_social', routes);

app.post('/corte_navalha', async (req, res) => {
  const profi = await Profissional.findOne({
    where: { name_pro: req.body.name_pro }
  });
  const id_pro = profi.id_pro;
  const servi = await Servicos.findOne({
    where: { tipo_corte: req.body.tipo_corte }
  });
  const id_serv = servi.id_serv;
  const id_cli = autentic.id_cli;

  const data = req.body.data;
  const horario = req.body.horario;
  const data_horarioS = `${data}T${horario}.000Z`;
  const data_horario = new Date(data_horarioS);
  // const somaHora = 2;
  // const fhora = new Date(data_horario);
  // fhora.setHours(data_horario.getHours() + somaHora);
  // let end_horariot = fhora.toISOString();
  // end_horariot = end_horariot.substring(11);
  // const end_horario = end_horariot.slice(0, -5);
  const end_horario = 'Rua Etec';

  Agendamento.create({ data_horario, end_horario, id_pro, id_serv, id_cli })
    .then(() => {
      res.redirect('/logado_index');
    });
});

app.post('/corte_social', async (req, res) => {
  const profi = await Profissional.findOne({
    where: { name_pro: req.body.name_pro }
  });
  const id_pro = profi.id_pro;
  const servi = await Servicos.findOne({
    where: { tipo_corte: req.body.tipo_corte }
  });
  const id_serv = servi.id_serv;
  const id_cli = autentic.id_cli;

  const data = req.body.data;
  const horario = req.body.horario;
  const data_horarioS = `${data}T${horario}.000Z`;
  const data_horario = new Date(data_horarioS);
  // const somaHora = 2;
  // const fhora = new Date(data_horario);
  // fhora.setHours(data_horario.getHours() + somaHora);
  // let end_horariot = fhora.toISOString();
  // end_horariot = end_horariot.substring(11);
  // const end_horario = end_horariot.slice(0, -5);
  const end_horario = 'Rua Etec';

  Agendamento.create({ data_horario, end_horario, id_pro, id_serv, id_cli })
    .then(() => {
      res.redirect('/logado_index');
    });
});

app.post('/corte_barba', async (req, res) => {
  const profi = await Profissional.findOne({
    where: { name_pro: req.body.name_pro }
  });
  const id_pro = profi.id_pro;
  const servi = await Servicos.findOne({
    where: { tipo_corte: req.body.tipo_corte }
  });
  const id_serv = servi.id_serv;
  const id_cli = autentic.id_cli;

  const data = req.body.data;
  const horario = req.body.horario;
  const data_horarioS = `${data}T${horario}.000Z`;
  const data_horario = new Date(data_horarioS);
  // const somaHora = 2;
  // const fhora = new Date(data_horario);
  // fhora.setHours(data_horario.getHours() + somaHora);
  // let end_horariot = fhora.toISOString();
  // end_horariot = end_horariot.substring(11);
  // const end_horario = end_horariot.slice(0, -5);
  const end_horario = 'Rua Etec';

  Agendamento.create({ data_horario, end_horario, id_pro, id_serv, id_cli })
    .then(() => {
      res.redirect('/logado_index');
    });
});

//Definição da porta
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});