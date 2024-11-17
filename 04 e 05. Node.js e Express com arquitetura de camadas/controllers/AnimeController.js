const AnimeService = require('../services/AnimeService');

class AnimeController {
  // Listar todos os animes
  getAllAnimes(req, res) {
    const animes = AnimeService.getAllAnimes();
    res.json(animes);
  }

  // Buscar um anime por ID
  getAnimeById(req, res) {
    const id = parseInt(req.params.id);  // Garantir que o ID seja um número
    if (isNaN(id)) {
      return res.status(400).json({ error: 'ID inválido' });  // Se o ID não for um número, retorna erro
    }

    const anime = AnimeService.getAnimeById(id);
    if (!anime) {
      return res.status(404).json({ error: 'Anime não encontrado' });
    }
    res.json(anime);
  }

  // Criar um novo anime
  createAnime(req, res) {
    const { name, genre, studio } = req.body;
    if (!name || !genre || !studio) {
      return res.status(400).json({ error: 'Todos os campos são obrigatórios.' });
    }
    const newAnime = AnimeService.createAnime(name, genre, studio);
    res.status(201).json(newAnime);
  }

  // Atualizar um anime por ID
  updateAnime(req, res) {
    const id = parseInt(req.params.id);  // Garantir que o ID seja um número
    if (isNaN(id)) {
      return res.status(400).json({ error: 'ID inválido' });  // Se o ID não for um número, retorna erro
    }

    const { name, genre, studio } = req.body;
    const updatedAnime = AnimeService.updateAnime(id, name, genre, studio);
    if (!updatedAnime) {
      return res.status(404).json({ error: 'Anime não encontrado' });
    }
    res.json(updatedAnime);
  }

  // Deletar um anime por ID
  deleteAnime(req, res) {
    const id = parseInt(req.params.id);  // Garantir que o ID seja um número
    if (isNaN(id)) {
      return res.status(400).json({ error: 'ID inválido' });  // Se o ID não for um número, retorna erro
    }

    const success = AnimeService.deleteAnime(id);
    if (!success) {
      return res.status(404).json({ error: 'Anime não encontrado' });
    }
    res.status(204).send();
  }
}

module.exports = new AnimeController();
