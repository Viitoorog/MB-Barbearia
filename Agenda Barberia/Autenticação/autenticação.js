function logar() {
    var login = document.getElementById('user').value;
    var senha = document.getElementById('pass').value;

    // Verifica se é o login e senha do administrador
    if (login === "admin" && senha === "admin") {
        location.href = "logado_index.html";
    }
    // Verifica se é o login e senha do usuário "matheus"
    else if (login === "matheus" && senha === "12345") {
        location.href = "administrador.html";
    }
    // Caso nenhum dos conjuntos de credenciais seja válido
    else {
        alert('Usuário Inválido');
    }
}



