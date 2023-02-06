import { refs } from '../DOM';
import { getMovieByID } from '../axios';
import { modalMarkup } from './modal-markup';

if (refs.filmGalleryHomeEl) {
  refs.filmGalleryHomeEl.addEventListener('click', e => onFilmPosterClick(e)),
    false;
}
if (refs.filmGalleryLibraryEl) {
  refs.filmGalleryLibraryEl.addEventListener('click', e => onFilmPosterClick(e)),
    false;
}

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
     release_date,
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
     release_date,
  };
  const markup = modalMarkup(movie);
  refs.containerEl.innerHTML = markup;
}

if (refs.modalEl) {
   
  refs.modalEl.addEventListener('click', e => {
    if (e.target.innerText === 'ADD TO WATCHED') {
      e.stopPropagation;
      const getArrayForWatched = JSON.parse(
        localStorage.getItem('add-to-watch')
      );
      if (getArrayForWatched) {
        getArrayForWatched.push(movie);
        const key = 'id'
        const unique = [...new Map(getArrayForWatched.map(obj => [obj[key], obj])).values()];
        localStorage.setItem(
          'add-to-watch',
          JSON.stringify(unique));
      } else {
        const newArr = [movie];
        newArr.push;
        localStorage.setItem('add-to-watch', JSON.stringify(newArr));
      }
    }
if (e.target.innerText === 'ADD TO QUEUE') {
      e.stopPropagation;
      const getArrayForWatched = JSON.parse(
        localStorage.getItem('add-to-queue')
      );
      if (getArrayForWatched) {
        getArrayForWatched.push(movie );
        const key = 'id'
        const unique = [...new Map(getArrayForWatched.map(obj => [obj[key], obj])).values()];
        localStorage.setItem(
          'add-to-queue',
          JSON.stringify(unique)
        );
      } else {
        const newArr = [movie];
        newArr.push;
        localStorage.setItem('add-to-queue', JSON.stringify(newArr));
      }
    }
    if (e.target.classList.value === 'modal__close-btn') {
      refs.backdropEl.classList.add('is-hidden');
    }
  })
}

   
  





