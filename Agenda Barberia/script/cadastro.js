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

  const senhaInput = document.getElementById('senha');
  const repetirSenhaInput = document.getElementById('repetir-senha');
  const passwordError = document.getElementById('password-error');
  const errorMessage = document.getElementById('error-message');
  
  function validarSenhas(event) {
      const senha = senhaInput.value;
      const repetirSenha = repetirSenhaInput.value;
  
      if (senha !== repetirSenha) {
          errorMessage.textContent = 'Senha incorreta. Digite novamente.';
          errorMessage.style.color = 'red';
          event.preventDefault(); // Impede o envio do formulário
      } else {
          errorMessage.textContent = ''; // Limpa a mensagem de erro
      }
  }
  
  // Adicione um evento de escuta para validar as senhas antes do envio do formulário
  document.querySelector('form').addEventListener('submit', validarSenhas);

