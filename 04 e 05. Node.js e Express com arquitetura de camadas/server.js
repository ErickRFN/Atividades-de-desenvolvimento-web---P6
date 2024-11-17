// server.js
const express = require('express');
const AnimeController = require('./controllers/AnimeController');

const app = express();

// Middleware
app.use(express.json()); // Usando express.json() diretamente

// Definir as rotas
app.get('/animes', AnimeController.getAllAnimes);
app.get('/animes/:id', AnimeController.getAnimeById);
app.post('/animes', AnimeController.createAnime);
app.put('/animes/:id', AnimeController.updateAnime);
app.delete('/animes/:id', AnimeController.deleteAnime);

const port = 3000;
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
