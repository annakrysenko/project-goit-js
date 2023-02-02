export function libraryMovieMarkup({
  id,
  poster_path,
  title,
  genre_ids,
  release_date,
}) {
  let markup = `
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
      </div>
    </div>
  </li>`;

  return markup;
}
//test
