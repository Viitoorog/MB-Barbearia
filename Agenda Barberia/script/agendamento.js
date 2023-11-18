document.addEventListener('click', function(event) {
    var logadoImage = document.getElementById('logado');
    var botaoSair = document.getElementById('botaoSair');

    // Verifica se o clique foi na imagem
    if (event.target === logadoImage) {
        // Se foi na imagem, mostra o botão
        botaoSair.style.display = 'block';
    } else {
        // Se foi em qualquer outro lugar, esconde o botão
        botaoSair.style.display = 'none';
    }
});
function redirecionarParaPagina() {
    window.location.href = "index.html";
}