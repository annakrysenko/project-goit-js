<<<<<<< HEAD:src/js/сardMovieMarkup.js
export function libraryMovieMarkup({
=======
const BASE_URL = 'https://image.tmdb.org/t/p/w500';
export function cardMovieMarkup(
>>>>>>> main:src/js/cardMovieMarkup.js
  id,
  poster_path,
  title,
  genre_ids,
  release_date,
<<<<<<< HEAD:src/js/сardMovieMarkup.js
}) {
  let markup = `
=======
  vote_average
) {
  const markup = `
>>>>>>> main:src/js/cardMovieMarkup.js
   <li class="movie-gallery__item" data-id="${id}">
    <div class="movie-gallery__poster">
      <img
        class="movie-gallery__photo"
        src="${BASE_URL}${poster_path}"
        alt="${title}"
      />
    </div>
    <div class="movie-gallery__wrap">
      <h2 class="movie-gallery__title">${title}</h2>
      <div class="movie-info">
        <p class="movie-info__genre">${genre_ids} |</p>
        <span class="movie-info__slash> | </span>
        <p class="movie-info__year">${release_date}</p>
<<<<<<< HEAD:src/js/сardMovieMarkup.js
=======
         <span class="movie-info__vote">${vote_average}</span>
>>>>>>> main:src/js/cardMovieMarkup.js
      </div>
    </div>
  </li>`;

  return markup;
}
