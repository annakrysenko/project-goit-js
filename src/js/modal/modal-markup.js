const BASE_URL = 'https://image.tmdb.org/t/p/w500';

export function modalMarkup(movie) {
  const genresName = movie.genresArr.join(', ');
  return `
  <img class = 'modal__img' src="${BASE_URL}${movie.poster_path}" alt="movie-poster" /></a>
  <h2 class = 'modal__title'>${movie.original_title}</h2>
  <p>Vote / Votes ${movie.vote_average}/${movie.vote_count}</p>
  <p>Popularity ${movie.popularity}</p>
  <p>Original Title ${movie.original_title} </p>
  // <p>Genre ${genresName}</p>
  <h3>About </h3>
  <p>${movie.overview}</p>
  <button data-id="${movie.id}" class="trailers" type="button">Watch trailer</button>
  <button class="watched" type="button">add to Watched</button>
  <button class="queue" type="button">add to queue</button>

`;
}
