const express = require('express');
const cors = require('cors');
const router = express.Router();
const bodyParser = require('body-parser');

router.use(cors());
router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());
router.use(express.static('C:/Users/pc/Documents/Rodrigo/MB-Barbearia/Front-End/img'));

//Rota Index
router.get('/', (req, res) => {
    res.sendFile('C:/Users/pc/Documents/Rodrigo/MB-Barbearia/Front-End/index.html');
});

//Rota Contatos
router.get('/contatos', (req, res) => {
    res.sendFile('C:/Users/pc/Documents/Rodrigo/MB-Barbearia/Front-End/contatos.html');
});

//Requerimento Css
router.get('/style.css', (req, res) => {
    res.sendFile('C:/Users/pc/Documents/Rodrigo/MB-Barbearia/Front-End/css/style.css', { headers: { 'Content-Type': 'text/css' } });
});

//Rota Cadastro
router.get('/cadastro', (req, res) => {
    res.sendFile('C:/Users/pc/Documents/Rodrigo/MB-Barbearia/Front-End/cadastro.html');
});

//Requerimento Css do Cadastro
router.get('/cadastro.css', (req, res) => {
    res.sendFile('C:/Users/pc/Documents/Rodrigo/MB-Barbearia/Front-End/css/cadastro.css', { headers: { 'Content-Type': 'text/css' } });
});

//Rota Login
router.get('/login', (req, res) => {
    res.sendFile('C:/Users/pc/Documents/Rodrigo/MB-Barbearia/Front-End/login.html');
});

//Requerimento Css do Login
router.get('/login.css', (req, res) => {
    res.sendFile('C:/Users/pc/Documents/Rodrigo/MB-Barbearia/Front-End/css/login.css', { headers: { 'Content-Type': 'text/css' } });
});

//Página Index com usuário logado
router.get('/indexlogado', (req, res) => {
    res.sendFile('C:/Users/pc/Documents/Rodrigo/MB-Barbearia/Agenda_Barberia/logado_index.html');
});

//Rota Serviços
router.get('/servicos', (req, res) => {
    res.sendFile('C:/Users/pc/Documents/Rodrigo/MB-Barbearia/Front-End/servicos.html');
});

module.exports = router;