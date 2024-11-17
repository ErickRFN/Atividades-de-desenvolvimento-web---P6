const Anime = require('../models/Anime');

// Banco de dados em memória
let animes = [
  { id: 1, name: 'Attack on Titan', genre: 'Action', studio: 'Wit Studio' },
  { id: 2, name: 'My Hero Academia', genre: 'Action', studio: 'Bones' },
  { id: 3, name: 'Demon Slayer', genre: 'Action', studio: 'Ufotable' },
  { id: 4, name: 'Death Note', genre: 'Thriller', studio: 'Madhouse' },
  { id: 5, name: 'One Piece', genre: 'Adventure', studio: 'Toei Animation' }
];

class AnimeRepository {
  getAll() {
    return animes;
  }

  getById(id) {
    return animes.find(a => a.id === id);
  }

  create(name, genre, studio) {
    const newAnime = new Anime(animes.length + 1, name, genre, studio);
    animes.push(newAnime);
    return newAnime;
  }

  update(id, name, genre, studio) {
    const anime = animes.find(a => a.id === id);
    if (anime) {
      if (name) anime.name = name;
      if (genre) anime.genre = genre;
      if (studio) anime.studio = studio;
      return anime;
    }
    return null;
  }

  delete(id) {
    const index = animes.findIndex(a => a.id === id);
    if (index !== -1) {
      animes.splice(index, 1);
      return true;
    }
    return false;
  }
}

module.exports = new AnimeRepository();
