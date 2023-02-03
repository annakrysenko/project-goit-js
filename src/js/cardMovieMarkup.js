const BASE_URL = 'https://image.tmdb.org/t/p/w500';


export function cardMovieMarkup(
  id,
  poster_path,
  original_title,
  genre_ids,
  release_date,
  vote_average,
) {
  let markup = `
   <li class="movie-gallery__item" data-id="${id}">
    <div class="movie-gallery__poster">
      <img
        class="movie-gallery__photo"
        src="${BASE_URL}${poster_path}"
        alt="${original_title}"
      />
    </div>
    <div class="movie-gallery__wrap">
      <h2 class="movie-gallery__title">${original_title}</h2>
      <div class="movie-info">
        <p class="movie-info__genre">${genre_ids} |</p>
        <span class="movie-info__slash> | </span>
        <p class="movie-info__year"> ${release_date}</p>
         <span class="movie-info__vote">IMDb: ${vote_average}</span>
      </div>
    </div>
  </li>`;

  return markup;
}
// test
