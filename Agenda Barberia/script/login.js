document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("login-form");
    const errorMessage = document.getElementById("error-message");

    loginForm.addEventListener("submit", function (e) {
        e.preventDefault();
        const username = loginForm.querySelector("#username").value;
        const password = loginForm.querySelector("#password").value;

        // Simule a verificação de autenticação
        if (username === "seu_usuario" && password === "sua_senha") {
            // Redirecionar para a página de sucesso após o login
            window.location.href = "pagina_de_sucesso.html";
        } else {
            errorMessage.textContent = "Usuário ou senha incorretos. Tente novamente.";
        }
    });
});

function redirecionarParaOutraPagina() {
    window.location.href = "logado_index.html";
}

