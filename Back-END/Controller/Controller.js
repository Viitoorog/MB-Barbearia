const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
const Contato = require('../models/modelContatos')
const Cadastro = require('../models/modelCadastro')

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('/Agenda_Barberia-2023-09-15/Agenda_Barberia/img'));

//Rota Index
app.get('/index', (req, res) => {
  res.sendFile('/Agenda_Barberia-2023-09-15/Agenda_Barberia/index.html');
});
app.get('/', (req, res) => {
  res.sendFile('/Agenda_Barberia-2023-09-15/Agenda_Barberia/index.html');
});

//Rota Contatos
app.get('/contatos', (req, res) => {
  res.sendFile('/Agenda_Barberia-2023-09-15/Agenda_Barberia/contatos.html');
});

//Requerimento Css
app.get('/style.css', (req, res) => {
  res.sendFile('/Agenda_Barberia-2023-09-15/Agenda_Barberia/css/style.css', { headers: { 'Content-Type': 'text/css' } });
});

//Armazenamento atributos tabela Contatos
app.post('/contatos', (req, res) => {
  const { name_fale, email_fale, assunto_fale, mensagem_fale } = req.body;

  Contato.create({ name_fale, email_fale, assunto_fale, mensagem_fale }) // Crie um novo usuário no banco de dados
    .then(() => {
      res.redirect('/index');
    })
});

//Rota Cadastro
app.get('/cadastro', (req, res) => {
  res.sendFile('/Agenda_Barberia-2023-09-15/Agenda_Barberia/cadastro.html');
});

//Requerimento Css
app.get('/cadastro.css', (req, res) => {
  res.sendFile('/Agenda_Barberia-2023-09-15/Agenda_Barberia/css/cadastro.css', { headers: { 'Content-Type': 'text/css' } });
});

//Armazenamento dados tabela Cadastro
app.post('/cadastro', (req, res) => {
  const { name_cli, email_cli, cpf_cli, telefone_cli, data_nasc_cli, endereco_cli, senha_cli, sexo_cli } = req.body;

  Cadastro.create({ name_cli, email_cli, cpf_cli, telefone_cli, data_nasc_cli, endereco_cli, senha_cli, sexo_cli })
    .then(() => {
      res.redirect('/index');
    })
});

//Rota Login
app.get('/login', (req, res) => {
  res.sendFile('/Agenda_Barberia-2023-09-15/Agenda_Barberia/login.html');
});

//Requerimento Css
app.get('/login.css', (req, res) => {
  res.sendFile('/Agenda_Barberia-2023-09-15/Agenda_Barberia/css/login.css', { headers: { 'Content-Type': 'text/css' } });
});

//Checagem no banco dos dados na página de login
app.post('/login', async (req, res) => {
  try {
    let response = await Cadastro.findOne({
      where: { name_cli: req.body.name_cli, senha_cli: req.body.senha_cli }
    })
    if(response != null) {
      res.redirect('/servicos');
    }
  } catch (error) {
    return res.send({ error: 'Usuário não encontrado'})   
}
});

app.get('/servicos', (req, res) => {
  res.sendFile('/Agenda_Barberia-2023-09-15/Agenda_Barberia/servicos.html');
});


app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});