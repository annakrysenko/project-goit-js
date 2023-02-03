import { refs } from './DOM';
import { getMovieByID } from './axios';

const BASE_URL = 'https://image.tmdb.org/t/p/w500';
export default function modalMurkup(movie) {  
    let genresName = movie.genres.map(ganre => ganre.name).join(', ')
   return `
  <img class = 'modal__img' src="${BASE_URL}${movie.poster_path}" alt="movie-poster" /></a>
  <h2 class = 'modal__title'>${movie.original_title}</h2>
  <p>Vote / Votes ${movie.vote_average}/${movie.vote_count}</p>
  <p>Popularity ${movie.popularity}</p>
  <p>Original Title ${movie.original_title} </p>
  <p>Genre ${genresName}</p>
  <h3>About </h3>
  <p>${movie.overview}</p>
  <button class="watched" type="button">add to Watched</button>
  <button class="queue" type="button">add to queue</button>

` 
}

refs.filmGalleryHomeEl.addEventListener('click',onFilmPosterClick)

localStorage.setItem('add-to-queue', JSON.stringify([]));
localStorage.setItem('add-to-watch', JSON.stringify([]));

function onFilmPosterClick(e) {
  const filmId = e.target.offsetParent.dataset.id;
  getMovieByID(filmId).then(movie => { 
    refs.modal.innerHTML = ''
    refs.modal.insertAdjacentHTML('afterbegin', modalMurkup(movie))
    

    // функція для запису в local storage по кліку на кнопку add to watch
    refs.modal.addEventListener('click', addToWached)
  function addToWached(e) {
    if (e.target.className === 'watched') {
      const getArrayForWached = JSON.parse(localStorage.getItem('add-to-watch'));
      getArrayForWached.push(movie)
      localStorage.setItem('add-to-watch', JSON.stringify(getArrayForWached))
      refs.modal.removeEventListener('click', addToWached)
   
  }
    }
    
   // функція для запису в local storage по кліку на кнопку queue
    refs.modal.addEventListener('click',queueBtn)
    function queueBtn(e) {
      if (e.target.className === 'queue') {
      const getArrayForQueue = JSON.parse(localStorage.getItem('add-to-queue'));
      getArrayForQueue.push(movie)
      localStorage.setItem('add-to-queue', JSON.stringify(getArrayForQueue))
        refs.modal.removeEventListener('click', queueBtn)
        
  }
    }
    })
}