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