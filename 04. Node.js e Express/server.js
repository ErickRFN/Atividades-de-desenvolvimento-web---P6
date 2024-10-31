const express = require('express');
const app = require('./app'); // Ajuste o caminho se necessário
const PORT = 3000;

// Iniciar o servidor
app.listen(PORT, (err) => {
    if (err) {
        console.error('Erro ao iniciar o servidor:', err);
    } else {
        console.log(`Servidor rodando na porta ${PORT}`);
    }
});
