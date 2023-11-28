function cadastro() {
        // Obtém os elementos de input
        var nomeInput = document.getElementById('name_cli');
        var cpfInput = document.getElementById('cpf_cli');
        var dataNascimentoInput = document.getElementById('data_nasc_cli');
        var enderecoInput = document.getElementById('endereco_cli');
        var telefoneInput = document.getElementById('telefone_cli');
        var emailInput = document.getElementById('email_cli');
        var senhaInput = document.getElementById('senha_cli');

        // Obtém a div de mensagem de erro
        var errorDiv = document.getElementById('password-error');

        // Verifica se os campos estão preenchidos
        if (
            nomeInput.value === '' ||
            cpfInput.value === '' ||
            dataNascimentoInput.value === '' ||
            enderecoInput.value === '' ||
            telefoneInput.value === '' ||
            emailInput.value === '' ||
            senhaInput.value === ''
        ) {
            // Se algum campo estiver vazio, exibe a mensagem de erro
            errorDiv.textContent = 'Por favor, preencha todos os campos.';
            return false; // Impede o envio do formulário
        }

        // Se todos os campos estiverem preenchidos, a mensagem de erro é removida
        errorDiv.textContent = '';

        window.location.href = "logado_index.html";
        return true; // Permite o envio do formulário
    }

