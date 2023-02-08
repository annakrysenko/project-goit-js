import { refs } from './DOM';

if (refs.watchedBtn) {
  refs.watchedBtn.addEventListener('click', createWatched);
}

export function createWatched() {
  refs.watchedBtn.classList.add('current');
  refs.queueBtn.classList.remove('current');
  const markup = getMovies();

  refs.filmGalleryLibraryEl.innerHTML = markup;
}

function getMovies() {
  const saveMovie = localStorage.getItem('add-to-watch');
  if (!saveMovie) {
    if (refs.removeBtn) {
      refs.removeBtn.classList.add('vis-hidden');
    }
    console.log('nothing');
    return '<div class="error-wrapp"><p class="error-tittle">Oooops...</p><p class="error-text">No movies have been added yet. Let&apos;s go pick something to your liking</p></div>';
  }
  if (refs.removeBtn) {
    refs.removeBtn.classList.remove('vis-hidden');
  }
  const parseMovie = JSON.parse(saveMovie);
  console.log('parseMovie', parseMovie);

  const markup = parseMovie
    .map(film => {
      const { id, poster_path, title, genresArr, releaseDate, vote_average } =
        film;
      const avarage = vote_average.toFixed(1);

      const BASE_URL = 'https://image.tmdb.org/t/p/w500';
      const markupCard = `
   <li class="movie-gallery__item" >
    <div class="movie-gallery__poster" data-id="${id}">
      <img
        class="movie-gallery__photo"
        src="${BASE_URL}${poster_path}"
        alt="${title}"
      />
    </div>
    <div class="movie-gallery__wrap">
      <h2 class="movie-gallery__title">${title}</h2>
      <div class="movie-info">
        <p class="movie-info__genre">${genresArr} | ${releaseDate}</p>
         <span class="movie-info__vote">IMDb: ${avarage}</span>
      </div>
    </div>
  </li>`;
      return markupCard;
    })
    .join('');
  return markup;
}
