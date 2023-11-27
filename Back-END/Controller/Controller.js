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

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('C:/Users/pc/Documents/Rodrigo/MB-Barbearia/Front-END/img'));

app.get('/criar', (req, res) => {
  // Profissional.create({
  //   name_pro: 'Otavio da Sousa Marcello',
  //   email_pro: 'otavio.marcello@geradornv.com.br',
  //   senha_pro: '123',
  //   num_end_pro: '135',
  //   rede_social_pro: 'facebook',
  //   end_pro: 'Rua Véu das Noivas',
  //   obs_pro: 'so tranças',
  //   sexo_pro: 'M',
  //   telefone_pro: '11996692514',
  //   data_nasc_pro: '2004-11-29'
  // });
  // Servicos.create({
  //   tipo_corte: 'social',
  //   valor_serv: 40.00,
  //   descricao_corte: 'com degrade e penteado',
  //   tempo_corte: '10000',
  // });
  Cadastro.create({
    name_cli: 'Adso Ignacia Paiva',
    email_cli: 'adso.paiva@geradornv.com.br',
    cpf_cli: '94453261306',
    telefone_cli: '89997132884',
    data_nasc_cli: '1987-04-23',
    endereco_cli: 'Rua São Cosme',
    senha_cli: '123456'
  });
  // Horario.create({
  //   horario_disponivel: '2023-08-15 18:30:00',
  //   horario_indisponivel: '2023-08-15 17:30:00',
  // });
  // Agendamento.create({
  //   data_horario: '2023-08-15 18:30:00',
  //   end_horario: 'Rua Etec',
  //   id_pro: 1,
  //   id_serv: 1,
  //   id_horario: 1,
  //   id_cli: 1
  // });
  res.redirect('/');
})

//Rota Index
app.use('/', routes);

//Rota Contatos
app.use('/contatos', routes);

//Requerimento Css
app.use('/style.css', routes);

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

//Checagem no banco de dados na página de login
app.post('/login', async (req, res) => {
  const usuario = await Cadastro.findOne({
    where: { name_cli: req.body.name_cli, senha_cli: req.body.senha_cli }
  });
  if (usuario === null) {
    res.send(JSON.stringify('error'));
  } else {
    res.redirect('/');
    return usuario;
    // res.redirect('/indexlogado');
    // res.send(response);
  }
});

//Logout da conta do usuário
app.post('/logout', (req, res) => {
  usuario = null;
  delete usuario;
  res.end;
  res.redirect('/');
})

//Rota Serviços
app.use('/servicos', routes);

app.post

//Definição da porta
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});