const BASE_URL = 'https://image.tmdb.org/t/p/w500';

export function modalMarkup(movie) {
  const genresName = movie.genresArr.join(', ');
  const avarage = movie.vote_average.toFixed(1);
  const popularity = movie.popularity.toFixed(1);
  const movieTitle = movie.title.toUpperCase()
  return `
<<<<<<< Updated upstream
  <img class = 'modal__img' src="${BASE_URL}${movie.poster_path}" alt="movie-poster" /></a>
  <h2 class = 'modal__title'>${movie.title}</h2>
  <p>Vote / Votes ${movie.vote_average}/${movie.vote_count}</p>
  <p>Popularity ${movie.popularity}</p>
  <p>Original Title ${movie.original_title} </p>
  // <p>Genre ${genresName}</p>
  <h3>About </h3>
  <p>${movie.overview}</p>
  <button data-id="${movie.id}" class="trailers" type="button" data-modal-open>Watch trailer</button>
=======
  <img class = 'modal-container__img' src="${BASE_URL}${movie.poster_path}" alt="movie-poster" /></a>
  <h2 class = 'modal-container__title'>${movieTitle}</h2>
  <div class = 'modal-container__info'>
  <div class = 'modal-container__info--key'> 
  <p class = 'modal-container__info--keytext'>Vote / Votes</p>
  <p class = 'modal-container__info--keytext'>Popularity</p>
  <p  class = 'modal-container__info--keytext'>Original Title</p>
  <p  class = 'modal-container__info--keytext'>Genre</p>
  </div>
  <div class = 'modal-container__info--value'>
  <p class = 'modal-container__info--valuetext'><span class = 'avarage-effects'>${avarage}</span> / <span class = 'count-effect'>${movie.vote_count}</span></p>
 <p class = 'modal-container__info--valuetext'>${popularity}</p>
  <p class = 'modal-container__info--valuetext'>${movieTitle}</p>
  <p class = 'modal-container__info--valuetext'>${genresName}</p>
  </div>
  </div>
  <h3 class = 'modal-container__second-title'>ABOUT</h3>
  <p modal-container__description>${movie.overview}</p>
>>>>>>> Stashed changes
  <button class="watched" type="button">add to Watched</button>
  <button class="queue" type="button">add to queue</button>
  `
}
