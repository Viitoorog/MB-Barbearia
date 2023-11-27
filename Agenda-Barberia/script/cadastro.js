document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("login-form");
    const errorMessage = document.getElementById("error-message");
    const googleLoginButton = document.getElementById("google-login");
    const facebookLoginButton = document.getElementById("facebook-login");

    loginForm.addEventListener("submit", function (e) {
        // Seu código de verificação e redirecionamento aqui...
    });

    // Simulação de login com Google
    googleLoginButton.addEventListener("click", function (e) {
        e.preventDefault();
        // Redirecionar para o login do Google ou executar ações necessárias.
    });

    // Simulação de login com Facebook
    facebookLoginButton.addEventListener("click", function (e) {
        e.preventDefault();
        // Redirecionar para o login do Facebook ou executar ações necessárias.
    });
});

function loginWithFacebook() {
    FB.login(function(response) {
      if (response.authResponse) {
        // O usuário fez login e autorizou o seu aplicativo
        console.log('Autorizado! Token de Acesso: ' + response.authResponse.accessToken);
      } else {
        // O usuário cancelou o login ou não autorizou o seu aplicativo
        console.log('Login cancelado ou não autorizado.');
      }
    });
  }

  document.addEventListener('DOMContentLoaded', function () {
    // Adiciona eventos de escuta aos campos de entrada
    var campos = document.querySelectorAll('.card input[required], .card select[required]');
    campos.forEach(function (campo) {
        campo.addEventListener('input', function () {
            removerMensagemErro();
        });
    });

    // Adiciona um ouvinte de eventos ao formulário para validar as senhas antes do envio
    var formulario = document.querySelector('form');
    formulario.addEventListener('submit', function (event) {
        validarSenhas(event);
        validarCadastro();
    });
});

function removerMensagemErro() {
    // Remove a mensagem de erro
    var mensagemErro = document.getElementById('preencha-informacao');
    mensagemErro.innerHTML = '';
}

function validarSenhas(event) {
    const senhaInput = document.getElementById('senha');
    const repetirSenhaInput = document.getElementById('repetir-senha');
    const errorMessage = document.getElementById('password-error');

    const senha = senhaInput.value;
    const repetirSenha = repetirSenhaInput.value;

    if (senha !== repetirSenha) {
        errorMessage.textContent = 'As senhas não coincidem. Digite novamente.';
        errorMessage.style.color = 'red';
        event.preventDefault(); // Impede o envio do formulário
    } else {
        errorMessage.textContent = ''; // Limpa a mensagem de erro
    }
}

function validarCadastro() {
    // Validar se todos os campos estão preenchidos
    var campos = document.querySelectorAll('.card input[required], .card select[required]');
    var preenchidos = true;

    campos.forEach(function (campo) {
        if (!campo.value.trim()) {
            preenchidos = false;
        }
    });

      
    if (preenchidos) {
      // Todos os campos estão preenchidos, redirecionar para outra tela
      window.location.href = "/logado_index";
    } else {
        // Exibir mensagem de erro abaixo dos elementos desejados
        var mensagemErro = document.getElementById('preencha-informacao');
        mensagemErro.innerHTML = '<div class="preencha-informacao" id="password-error">Por favor, preencha todos os campos.</div>';

        // Role para a mensagem de erro para que seja visível
        mensagemErro.scrollIntoView({ behavior: 'smooth' });
    }
  }



