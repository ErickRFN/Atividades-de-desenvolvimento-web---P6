// services/AnimeService.js
const AnimeRepository = require('../repositories/AnimeRepository');

class AnimeService {
  getAllAnimes() {
    return AnimeRepository.getAll();
  }

  getAnimeById(id) {
    return AnimeRepository.getById(id);
  }

  createAnime(name, genre, studio) {
    return AnimeRepository.create(name, genre, studio);
  }

  updateAnime(id, name, genre, studio) {
    return AnimeRepository.update(id, name, genre, studio);
  }

  deleteAnime(id) {
    return AnimeRepository.delete(id);
  }
}

module.exports = new AnimeService();
