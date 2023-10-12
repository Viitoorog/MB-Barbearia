const Cadastro = require('../models/modelCadastro');
const { app } = require('./Controller');

app.post('/login', async (req, res) => {
  try {
    await Cadastro.findOne({
      where: { name: req.body.username, password: req.body.password }
    });
    if (response === null) {
      then(() => {
        res.redirect('/servicos');
      });
    }
  }

  finally {
  }

});
