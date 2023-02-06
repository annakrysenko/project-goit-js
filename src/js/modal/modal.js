import { refs } from '../DOM';
import { getMovieByID } from '../axios';

import { addToWatched } from './add-to-watched-btn';
import { addToQueue } from './queue-btn';
import { modalMarkup } from './modal-markup';

if (refs.filmGalleryHomeEl) {
  refs.filmGalleryHomeEl.addEventListener('click', e => onFilmPosterClick(e)),
    false;
}

// if (!localStorage.getItem('add-to-watch')) {
//   localStorage.setItem('add-to-watch', JSON.stringify([]));
// }
// if (!localStorage.getItem('add-to-queue')) {
//   localStorage.setItem('add-to-queue', JSON.stringify([]));
// }
let movie;
async function onFilmPosterClick(e) {
  // if e.target.offsetParent.dataset.id
  e.stopPropagation;

  refs.backdropEl.classList.remove('is-hidden');
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
  movie = {
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
}

// function addToWatched(e) {}

// function queueBtn(e) {}
if (refs.modalEl) {
  refs.modalEl.addEventListener('click', e => {
    // функція для запису в local storage по кліку на кнопку add to watch
    if (e.target.innerText === 'ADD TO WATCHED') {
      e.stopPropagation;

      const getArrayForWatched = JSON.parse(
        localStorage.getItem('add-to-watch')
      );
      // const uniq1 = new Set([movie, getArrayForWatched]);
      console.log('getArrayForWatched', getArrayForWatched);
      // uniq1.add(getArrayForWatched);
      // console.log(movie);
      if (getArrayForWatched) {
        getArrayForWatched.push({ ...movie });
        localStorage.setItem(
          'add-to-watch',
          JSON.stringify(getArrayForWatched)
        );
      } else {
        const newArr = [{ ...movie }];
        newArr.push;
        localStorage.setItem('add-to-watch', JSON.stringify(newArr));
      }
      // refs.modalEl.removeEventListener('click', addToWatched);
    }
    // функція для запису в local storage по кліку на кнопку add to queue
    if (e.target.innerText === 'ADD TO QUEUE') {
      e.stopPropagation;

      const getArrayForWatched = JSON.parse(
        localStorage.getItem('add-to-queue')
      );
      // const uniq1 = new Set([movie, getArrayForWatched]);
      console.log('getArrayForWatched', getArrayForWatched);
      // console.log(movie);
      if (getArrayForWatched) {
        getArrayForWatched.push({ ...movie });
        localStorage.setItem(
          'add-to-queue',
          JSON.stringify(getArrayForWatched)
        );
      } else {
        const newArr = [{ ...movie }];
        newArr.push;
        localStorage.setItem('add-to-queue', JSON.stringify(newArr));
      }
    }

    //закриття модалки
    if (e.target.classList.value === 'modal__close-btn') {
      refs.backdropEl.classList.add('is-hidden');
    }
  });
}
