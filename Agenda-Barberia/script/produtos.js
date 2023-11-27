// Seleciona todas as divs com a classe "barbeiro"
const barbeiros = document.querySelectorAll(".barbeiro");

// Itera sobre cada div "barbeiro"
barbeiros.forEach((barbeiro) => {
    // Adiciona um ouvinte de evento para quando o mouse entra na div
    barbeiro.addEventListener("mouseenter", () => {
        // Seleciona a descrição dentro da div "barbeiro"
        const descricao = barbeiro.querySelector(".descricao");
        // Define a opacidade da descrição como 1 para torná-la visível
        descricao.style.opacity = "1";
    });

    // Adiciona um ouvinte de evento para quando o mouse sai da div
    barbeiro.addEventListener("mouseleave", () => {
        // Seleciona a descrição dentro da div "barbeiro"
        const descricao = barbeiro.querySelector(".descricao");
        // Define a opacidade da descrição como 0 para ocultá-la
        descricao.style.opacity = "0";
    });
});