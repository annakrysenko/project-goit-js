import { refs } from '../DOM';
import { getMovieByID } from '../axios';
import { modalMarkup } from './modal-markup';

if (refs.filmGalleryHomeEl) {
  refs.filmGalleryHomeEl.addEventListener('click', onFilmPosterClick)   
}
if (refs.filmGalleryLibraryEl) {
  refs.filmGalleryLibraryEl.addEventListener('click', onFilmPosterClick)
}



let movie;
async function onFilmPosterClick(e) {
 
  e.stopPropagation;
  if (e.target.className === "movie-gallery__photo") {
    refs.backdropEl.classList.remove('is-hidden');
    refs.backdropEl.addEventListener('click', onModalListeners);
    window.addEventListener('keydown', onCloseEsc);
    // зупиняє скрол коли відкрита модалка
    document.body.style = 'overflow-y: hidden';
  }

  refs.containerEl.innerHTML = ''
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
  const releaseDate = release_date.slice(0, 4);
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
    releaseDate,
  };
  const markup = modalMarkup(movie);
  refs.containerEl.innerHTML = markup;
}


  
function onModalListeners(e) {
    // Додати до переглянутих
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

    // Додати до черги
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
    // Закрити модалку
    if (e.target.classList.value === 'modal__close-btn' || e.currentTarget) {
      refs.backdropEl.classList.add('is-hidden');
      refs.backdropEl.removeEventListener('click', onModalListeners)
      window.removeEventListener('keydown', onCloseEsc)
      const scrollY = document.body.style.top;
      //відновлює скрол коли модалка закрита
      document.body.style.overflow = ''
    }
}  

// Закрити через Escape
function onCloseEsc(e) {
  if (e.code === 'Escape') {
    refs.backdropEl.classList.add('is-hidden');
    refs.backdropEl.removeEventListener('click', onModalListeners);
    window.removeEventListener('keydown', onCloseEsc);
    //відновлює скрол коли модалка закрита
    document.body.style.overflow = ''
  } 
  }







