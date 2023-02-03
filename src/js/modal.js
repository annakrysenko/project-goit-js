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
` 
}

refs.filmGalleryHomeEl.addEventListener('click',onFilmPosterClick)

function onFilmPosterClick(e) {

  const filmId = e.target.offsetParent.dataset.id;
  getMovieByID(filmId).then(movie => {
        refs.modal.innerHTML = ''
      refs.modal.insertAdjacentHTML('afterbegin', modalMurkup(movie))
    })


}