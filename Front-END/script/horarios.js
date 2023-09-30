function selectTime(time) {
    document.getElementById("selected-time").innerText = time;
  }

  // Primeiro, selecione o botão de confirmação
const confirmButton = document.getElementById("confirm-button");

// Em seguida, defina o botão para estar oculto por padrão
confirmButton.style.display = "none";

// Função para selecionar um horário
function selectTime(time) {
    document.getElementById("selected-time").innerText = time;
    confirmButton.style.display = "block"; // Mostrar o botão de confirmação
}

// Função para confirmar o horário selecionado
function confirmTime() {
    var selectedTime = document.getElementById("selected-time").innerText;
    alert("Horário confirmado: " + selectedTime);
    // Aqui você pode adicionar ações adicionais ao confirmar o horário, como redirecionar para outra página, enviar informações para o servidor, etc.
}

function showConfirmation() {
  const confirmationDialog = document.getElementById("confirmation-dialog");
  confirmationDialog.style.display = "block";
}

function cancelConfirmation() {
  const confirmationDialog = document.getElementById("confirmation-dialog");
  confirmationDialog.style.display = "none";
}

function confirmConfirmation() {
  const selectedTime = document.getElementById("selected-time").innerText;
  alert("Horário confirmado: " + selectedTime);
  // Aqui você pode adicionar ações adicionais ao confirmar o horário, como redirecionar para outra página, enviar informações para o servidor, etc.
  const confirmationDialog = document.getElementById("confirmation-dialog");
  confirmationDialog.style.display = "none";
}

function confirmConfirmation() {
  const selectedTime = document.getElementById("selected-time").innerText;
  alert("Horário confirmado: " + selectedTime);
  // Aqui você pode adicionar ações adicionais ao confirmar o horário, como redirecionar para outra página, enviar informações para o servidor, etc.
  const confirmationDialog = document.getElementById("confirmation-dialog");
  confirmationDialog.style.display = "none";

  // Ocultar o botão "Confirmar"
  const confirmButton = document.getElementById("confirm-button");
  confirmButton.style.display = "none";
}


