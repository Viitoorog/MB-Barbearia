// Inicialmente, oculte o modal e o successModal
const modal = document.getElementById("modal");
const successModal = document.getElementById("successModal");
modal.style.display = "none";
successModal.style.display = "none";

const form = document.querySelector(".form");

const confirmButton = document.getElementById("confirmButton");
const confirmModalButton = document.getElementById("confirmModalButton");
const okButton = document.querySelector("#successModal .modal-button.confirm-button");


confirmButton.addEventListener("click", () => {
    form.style.display = "none"; // Ocultar o formulário
    modal.style.display = "block"; // Exibir o modal
});

confirmModalButton.addEventListener("click", () => {
    modal.style.display = "none"; // Ocultar o modal
    successModal.style.display = "block"; // Exibir o modal de sucesso
});

okButton.addEventListener("click", () => {
    successModal.style.display = "none"; // Ocultar o modal de sucesso
    form.style.display = "block"; // Exibir o formulário novamente
});



cancelModalButton.addEventListener("click", () => {
    window.location.href = "teste.html"; // Substitua "index.html" pelo URL da sua página inicial
});



