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
    document.addEventListener('click', closeModalByDocument)
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
  checkAddToWatch(filmId)
  checkqueue(filmId)
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
      const watched = document.querySelector('.watched');
      watched.textContent = 'added to watched'.toUpperCase();
      watched.classList.replace('watched', 'disabled');
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
    const queue = document.querySelector('.queue'); 
    queue.classList.replace ('queue', 'disabled')
    queue.innerHTML = 'added to queue'.toUpperCase()
    }
    // Закрити модалку
    if (e.target.classList.value === 'modal__close-btn') {
      refs.backdropEl.classList.add('is-hidden');
      refs.modalEl.removeEventListener('click', onModalListeners)
      window.removeEventListener('keydown', onCloseEsc)
      document.removeEventListener('click', closeModalByDocument);
      //відновлює скрол коли модалка закрита
      document.body.style.overflow = ''
    }
}  

// Закрити модалку через Escape
function onCloseEsc(e) {
  if (e.code === 'Escape') {
    refs.backdropEl.classList.add('is-hidden');
    refs.modalEl.removeEventListener('click', onModalListeners);
    window.removeEventListener('keydown', onCloseEsc);
    document.removeEventListener('click', closeModalByDocument);
    //відновлює скрол коли модалка закрита
    document.body.style.overflow = ''
  } 
}
  // Закриває модалку по кліку на бекдроп
function closeModalByDocument(e) {
  if (e.target.classList.value === 'backdrop') {
    refs.backdropEl.classList.add('is-hidden');
    refs.modalEl.removeEventListener('click', onModalListeners)
    window.removeEventListener('keydown', onCloseEsc)
    document.removeEventListener('click', closeModalByDocument);
    //відновлює скрол коли модалка закрита
    document.body.style.overflow = ''
  }
}


function checkAddToWatch(movieId) {
  const getArrayForWatched = JSON.parse(localStorage.getItem('add-to-watch'))
  if (getArrayForWatched === null) {
    return
  } else if (getArrayForWatched.find(movie => { return Number(movieId) === movie.id })) {
    const watched = document.querySelector('.watched');
    watched.classList.replace ('watched', 'disabled')
    watched.innerHTML = 'added to watched'.toUpperCase()
  }
}

function checkqueue(movieId) {
  const getArrayForWatched = JSON.parse(localStorage.getItem('add-to-queue'));
  if (getArrayForWatched === null) {
  return
}
  else if (getArrayForWatched.find(movie => { return Number(movieId) === movie.id })) {
    const queue = document.querySelector('.queue'); 
    queue.classList.replace ('queue', 'disabled')
    queue.innerHTML = 'added to queue'.toUpperCase()
  }
}
 



