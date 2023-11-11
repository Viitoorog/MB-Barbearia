// No lado do servidor (Node.js) para enviar eventos SSE
const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, {
        'Content-Type': 'text/event-stream',
        'Cache-Control': 'no-cache',
        'Connection': 'keep-alive'
    });

    // Simulação de um novo agendamento (você deve usar seu banco de dados real aqui)
    setTimeout(() => {
        const newAppointment = {
            nome: "Novo Cliente",
            data: "2023-09-23",
            horario: "2:00 PM",
            tipoCorte: "Corte Especial",
            preco: "R$ 50,00"
        };
        res.write(`data: ${JSON.stringify(newAppointment)}\n\n`);
    }, 5000); // Simula um novo agendamento a cada 5 segundos

});

server.listen(3000, () => {
    console.log('Server listening on port 3000');
});

// No lado do cliente (página de administração)
const eventSource = new EventSource('/sse-server'); // O URL deve corresponder ao servidor SSE

eventSource.onmessage = (event) => {
    const newAppointment = JSON.parse(event.data);

    // Atualize a tabela de administração com os dados do novo agendamento
    const tbody = document.querySelector('tbody');
    const newRow = document.createElement('tr');
    newRow.innerHTML = `
        <td>${newAppointment.nome}</td>
        <td>${newAppointment.data}</td>
        <td>${newAppointment.horario}</td>
        <td>${newAppointment.tipoCorte}</td>
        <td>${newAppointment.preco}</td>
    `;
    tbody.appendChild(newRow);
};