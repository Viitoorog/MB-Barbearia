<?php
// Recupera os dados enviados via POST
$fullName = $_POST['fullName'];
$email = $_POST['email'];

// Conecta ao seu banco de dados (substitua com suas credenciais)
$conn = new mysqli("seu_servidor", "seu_usuario", "sua_senha", "seu_banco_de_dados");

// Verifica a conexão
if ($conn->connect_error) {
    die("Conexão falhou: " . $conn->connect_error);
}

// Insere os dados na tabela (substitua com sua estrutura de tabela)
$sql = "INSERT INTO usuarios (nome, email) VALUES ('$fullName', '$email')";
if ($conn->query($sql) === TRUE) {
    echo "Dados salvos com sucesso!";
} else {
    echo "Erro ao salvar dados: " . $conn->error;
}

$conn->close();
?>
