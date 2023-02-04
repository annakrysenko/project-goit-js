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
  console.dir(filmId)

  const moviePromise = await getMovieByID(filmId);
  const { poster_path, genres, overview, id, vote_average, vote_count, popularity, original_title, } = moviePromise;
  const genresArr = [...genres].map(genre => genre.name);
  const movie = { poster_path, genresArr, overview, id, vote_average, vote_count, popularity, original_title, };
  console.log("onFilmPosterClick ~ movie", movie)
  const markup = modalMarkup(movie);
  refs.modalEl.innerHTML = markup;
  console.dir(refs.modalEl);
  //   // функція для запису в local storage по кліку на кнопку add to queue
refs.modalEl.addEventListener('click', addToWatched);
  //   refs.modal.addEventListener('click', queueBtn);

  //   // функція для запису в local storage по кліку на кнопку add to watch
    

  //   // функція для запису в local storage по кліку на кнопку queue
}
