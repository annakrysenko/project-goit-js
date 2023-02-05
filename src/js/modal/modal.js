import { refs } from '../DOM';
import { getMovieByID } from '../axios';

import { addToWatched } from './add-to-watched-btn';
import { addToQueue } from './queue-btn';
import { modalMarkup } from './modal-markup';
// import { renderMoviesinWatchedLibrary } from '../library/add-to-watched';
if (refs.filmGalleryHomeEl) {
  refs.filmGalleryHomeEl.addEventListener('click', e => onFilmPosterClick(e));
}

if (!localStorage.getItem('add-to-watch')) {
  localStorage.setItem('add-to-watch', JSON.stringify([]));
}
if (!localStorage.getItem('add-to-queue')) {
  localStorage.setItem('add-to-queue', JSON.stringify([]));
}

async function onFilmPosterClick(e) {
  // if e.target.offsetParent.dataset.id
  refs.backdropEl.classList.remove('is-hiden');
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
    title,
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
    title,
  };
  const markup = modalMarkup(movie);
  refs.containerEl.innerHTML = markup;

  //   // функція для запису в local storage по кліку на кнопку add to watch
  refs.modalEl.addEventListener('click', addToWatched);
  function addToWatched(e) {
    if (e.target.className === 'watched') {
      const getArrayForWached = JSON.parse(localStorage.getItem('add-to-watch'));
      getArrayForWached.push({
        poster_path,
        genresArr,
        overview,
        id,
        vote_average,
        vote_count,
        popularity,
        original_title,
        title,
      });
      let uniq = [...new Set(getArrayForWached)];
      localStorage.setItem('add-to-watch', JSON.stringify(uniq));
      refs.modalEl.removeEventListener('click', addToWatched);
    }
  }

  //   // функція для запису в local storage по кліку на кнопку queue
  refs.modalEl.addEventListener('click', queueBtn);
  function queueBtn(e) {
    if (e.target.className === 'queue') {
      const getArrayForQueue = JSON.parse(localStorage.getItem('add-to-queue'));
      getArrayForQueue.push({
        poster_path,
        genresArr,
        overview,
        id,
        vote_average,
        vote_count,
        popularity,
        original_title,
        title,
      });
      let uniq = [...new Set(getArrayForQueue)];
      localStorage.setItem('add-to-queue', JSON.stringify(uniq));
      refs.modalEl.removeEventListener('click', queueBtn);
    }
  }

  //закриття модалки
  refs.modalCloseBtn.addEventListener('click', e => {
    refs.backdropEl.classList.add('is-hiden');
  });
}
