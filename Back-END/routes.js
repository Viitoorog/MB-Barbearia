const express = require('express');
const cors = require('cors');
const router = express.Router();
const bodyParser = require('body-parser');

router.use(cors());
router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());
router.use(express.static('C:/Users/pc/Documents/Rodrigo/MB-Barbearia/Agenda-Barberia/img'));

// ================ CSS =================== //

//Css
router.get('/style.css', (req, res) => {
    res.sendFile('C:/Users/pc/Documents/Rodrigo/MB-Barbearia/Agenda-Barberia/css/style.css', { headers: { 'Content-Type': 'text/css' } });
});

//Css do Cadastro
router.get('/cadastro.css', (req, res) => {
    res.sendFile('C:/Users/pc/Documents/Rodrigo/MB-Barbearia/Agenda-Barberia/css/cadastro.css', { headers: { 'Content-Type': 'text/css' } });
});

//Css do Login
router.get('/login.css', (req, res) => {
    res.sendFile('C:/Users/pc/Documents/Rodrigo/MB-Barbearia/Agenda-Barberia/css/login.css', { headers: { 'Content-Type': 'text/css' } });
});

//Css do Index
router.get('/login.css', (req, res) => {
    res.sendFile('C:/Users/pc/Documents/Rodrigo/MB-Barbearia/Agenda-Barberia/css/index.css', { headers: { 'Content-Type': 'text/css' } });
});

//Css do Home
router.get('/login.css', (req, res) => {
    res.sendFile('C:/Users/pc/Documents/Rodrigo/MB-Barbearia/Agenda-Barberia/css/home.css', { headers: { 'Content-Type': 'text/css' } });
});

//Css do teste
router.get('/login.css', (req, res) => {
    res.sendFile('C:/Users/pc/Documents/Rodrigo/MB-Barbearia/Agenda-Barberia/css/teste.css', { headers: { 'Content-Type': 'text/css' } });
});

//Css do Administrador
router.get('/login.css', (req, res) => {
    res.sendFile('C:/Users/pc/Documents/Rodrigo/MB-Barbearia/Agenda-Barberia/css/administrador.css', { headers: { 'Content-Type': 'text/css' } });
});


// ================ HTML =============== //

//Rota Index
router.get('/', (req, res) => {
    res.sendFile('C:/Users/pc/Documents/Rodrigo/MB-Barbearia/Agenda-Barberia/index.html');
});

//Rota Contatos
router.get('/contatos', (req, res) => {
    res.sendFile('C:/Users/pc/Documents/Rodrigo/MB-Barbearia/Agenda-Barberia/contatos.html');
});

//Rota Cadastro
router.get('/cadastro', (req, res) => {
    res.sendFile('C:/Users/pc/Documents/Rodrigo/MB-Barbearia/Agenda-Barberia/cadastro.html');
});

//Rota Login
router.get('/login', (req, res) => {
    res.sendFile('C:/Users/pc/Documents/Rodrigo/MB-Barbearia/Agenda-Barberia/login.html');
});

//Página Index com usuário logado
router.get('/indexlogado', (req, res) => {
    res.sendFile('C:/Users/pc/Documents/Rodrigo/MB-Barbearia/Agenda_Barberia/logado_index.html');
});

//Rota Serviços
router.get('/servicos', (req, res) => {
    res.sendFile('C:/Users/pc/Documents/Rodrigo/MB-Barbearia/Agenda-Barberia/servicos.html');
});

module.exports = router;