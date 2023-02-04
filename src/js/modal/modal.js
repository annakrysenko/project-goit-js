import { refs } from '../DOM';
import { getMovieByID } from '../axios';

import { addToWatched } from './add-to-watched-btn';
import { queueBtn } from './queue-btn';
import { modalMarkup } from './modal-markup';

refs.filmGalleryHomeEl.addEventListener('click', e => onFilmPosterClick(e));

// localStorage.setItem('add-to-queue', JSON.stringify([]));
// localStorage.setItem('add-to-watch', JSON.stringify([]));

async function onFilmPosterClick(e) {
  // if e.target.offsetParent.dataset.id
  const filmId = e.target.offsetParent.dataset.id;

  const moviePromise = await getMovieByID(filmId);
  const { poster_path, genres, overview } = moviePromise;
  const genresArr = [...genres].map(genre => genre.name);
  const movie = { poster_path, genresArr, overview };
  const markup = modalMarkup(movie);
  refs.modalEl.innerHTML = markup;
  //   // функція для запису в local storage по кліку на кнопку add to queue

  //   refs.modal.addEventListener('click', queueBtn);

  //   // функція для запису в local storage по кліку на кнопку add to watch
  //   refs.modal.addEventListener('click', addToWatched);

  //   // функція для запису в local storage по кліку на кнопку queue
}