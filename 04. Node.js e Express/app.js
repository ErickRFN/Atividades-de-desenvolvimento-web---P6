const express = require('express');
const app = express();

// Middleware
app.use(express.json()); // Usando express.json() diretamente

// Banco de dados em memória
let animes = [
    { id: 1, name: 'Attack on Titan', genre: 'Action', studio: 'Wit Studio' },
    { id: 2, name: 'My Hero Academia', genre: 'Action', studio: 'Bones' },
    { id: 3, name: 'Demon Slayer', genre: 'Action', studio: 'Ufotable' },
    { id: 4, name: 'Death Note', genre: 'Thriller', studio: 'Madhouse' },
    { id: 5, name: 'One Piece', genre: 'Adventure', studio: 'Toei Animation' }
];

// Listar todos os animes
app.get('/animes', (req, res) => {
    console.log('Listando todos os animes...');
    res.json(animes);
});

// Listar um anime por ID
app.get('/animes/:id', (req, res) => {
    console.log(`Buscando anime com ID: ${req.params.id}`);
    const anime = animes.find(a => a.id === parseInt(req.params.id));
    if (!anime) {
        console.log('Anime não encontrado');
        return res.status(404).json({ error: 'Anime não encontrado' });
    }
    console.log('Anime encontrado:', anime);
    res.json(anime);
});

// Criar um novo anime
app.post('/animes', (req, res) => {
    const { name, genre, studio } = req.body;
    console.log('Tentando adicionar um novo anime:', req.body);

    // Validação
    if (!name || !genre || !studio) {
        console.log('Erro de validação: todos os campos são obrigatórios.');
        return res.status(400).json({ error: 'Todos os campos são obrigatórios.' });
    }

    const newAnime = {
        id: animes.length + 1,
        name,
        genre,
        studio
    };

    animes.push(newAnime);
    console.log('Anime adicionado:', newAnime);
    res.status(201).json(newAnime); // Retornando 201 Created
});

// Atualizar um anime por ID
app.put('/animes/:id', (req, res) => {
    const { id } = req.params;
    const { name, genre, studio } = req.body;

    console.log(`Tentando atualizar anime com ID: ${id}`);

    const anime = animes.find(a => a.id === parseInt(id));
    if (!anime) {
        console.log('Anime não encontrado');
        return res.status(404).json({ error: 'Anime não encontrado' });
    }

    if (name) anime.name = name;
    if (genre) anime.genre = genre;
    if (studio) anime.studio = studio;

    console.log('Anime atualizado:', anime);
    res.json(anime);
});

// Deletar um anime por ID
app.delete('/animes/:id', (req, res) => {
    const { id } = req.params;
    console.log(`Tentando deletar anime com ID: ${id}`);

    const index = animes.findIndex(a => a.id === parseInt(id));
    if (index === -1) {
        console.log('Anime não encontrado');
        return res.status(404).json({ error: 'Anime não encontrado' });
    }

    const deletedAnime = animes.splice(index, 1);
    console.log('Anime deletado:', deletedAnime);
    res.status(204).send(); // Retornando 204 No Content
});

// Exportar app
module.exports = app;
