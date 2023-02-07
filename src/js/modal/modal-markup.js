const BASE_URL = 'https://image.tmdb.org/t/p/w500';

export function modalMarkup(movie) {
  const genresName = movie.genresArr.join(', ');
  const avarage = movie.vote_average.toFixed(1);
  const popularity = movie.popularity.toFixed(1);
  const movieTitle = movie.title.toUpperCase();
  return `
  <div class="image-btn-wrapper">
  <button data-id="${movie.id}" class="trailers" type="button" data-modal-open>
    <img
      data-id="${movie.id}"
      class="icon-youtube"
      src="https://cdn-icons-png.flaticon.com/512/1384/1384060.png"
      alt="logo"
    />
    <span data-id="${movie.id}" class="trailers-text">Watch trailer</span>
  </button>
  <img
    class="modal-container__img"
    src="${BASE_URL}${movie.poster_path}"
    alt="movie-poster"
  />
</div>
  <div class = 'modal-container__fullInfo'>
  <h2 class = 'modal-container__title'>${movieTitle}</h2>
  <div class = 'modal-container__info'>
  <div class = 'modal-container__info--key'> 
  <p class = 'modal-container__info--keytext'>Vote / Votes</p>
  <p class = 'modal-container__info--keytext'>Popularity</p>
  <p  class = 'modal-container__info--keytext'>Original Title</p>
  <p  class = 'modal-container__info--keytext'>Genre</p>
  </div>
  <div >
  <p class = 'modal-container__info--valuetext'><span class = 'avarage-effects'>${avarage}</span> / <span class = 'count-effect'>${movie.vote_count}</span></p>
  <p class = 'modal-container__info--valuetext'>${popularity}</p>
  <p class = 'modal-container__info--valuetext'>${movieTitle}</p>
  <p class = 'modal-container__info--valuetext'>${genresName}</p>
  </div>
  </div>
  <h3 class = 'modal-container__second-title'>ABOUT</h3>
  <p class = 'modal-container__description'>${movie.overview}</p>
  <div class = 'btn-container'>
  <button class="watched" id='watched-modal' type="button">add to Watched</button>
  <button class="queue" id='queue-modal' type="button">add to queue</button>
  </div>
  `;
}
