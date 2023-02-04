import { refs } from '../DOM';
import { getMovieByID } from '../axios';

import { addToWatched } from './add-to-watched-btn';
import { addToQueue } from './queue-btn';
import { modalMarkup } from './modal-markup';

refs.filmGalleryHomeEl.addEventListener('click', e => onFilmPosterClick(e));

async function onFilmPosterClick(e) {
  const filmId = e.target.offsetParent.dataset.id;

  const moviePromise = await getMovieByID(filmId);
  const {
    poster_path,
    genres,
    overview,
    id,
    vote_average,
    vote_count,
    popularity,
    original_title,
  } = moviePromise;
  const genresArr = [...genres].map(genre => genre.name);
  const movie = {
    poster_path,
    genresArr,
    overview,
    id,
    vote_average,
    vote_count,
    popularity,
    original_title,
  };
  const markup = modalMarkup(movie);
  refs.modalEl.innerHTML = markup;

  //   // функція для запису в local storage по кліку на кнопку add to watch
  if (refs.modalEl) {
    refs.modalEl.addEventListener('click', e => {
      if (e.target.id === 'watched') {
        addToWatched(+filmId);
      }
      if (e.target.id === 'queue') {
        addToQueue(+filmId);
      }
    });
    //   // функція для запису в local storage по кліку на кнопку queue
  }
}
