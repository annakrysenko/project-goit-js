import { refs } from './DOM';
import { createWatched } from './add-to-watch';

if (refs.queueBtn) {
  refs.queueBtn.addEventListener('click', createQueue);
  createQueue();
}

function createQueue() {
  refs.watchedBtn.classList.remove('current');
  refs.queueBtn.classList.add('current');

  const markup = getMoviesQueue();
  refs.filmGalleryLibraryEl.innerHTML = markup;
}

function getMoviesQueue() {
  const saveMovie = localStorage.getItem('add-to-queue');
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
  console.log('saveMovie', saveMovie);
  const parseMovie = JSON.parse(saveMovie);
  console.log('parseMovie', parseMovie);

  const markup = parseMovie
    .map(film => {
      const { id, poster_path, title, genresArr, releaseDate, vote_average } =
        film;
      console.log('vote_average', vote_average);
      const avarage = vote_average.toFixed(1);
      console.log('avarage', avarage);
      console.log('poster_path', poster_path);
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

if (refs.removeBtn) {
  refs.removeBtn.addEventListener('click', onClickRemove);
}

function onClickRemove() {
  if (refs.queueBtn.className === 'button-queue current') {
    removeFromQueue();
  } else if (refs.watchedBtn.className === 'button-watched current') {
    removeFromWatched();
  }
}

function removeFromQueue() {
  localStorage.removeItem('add-to-queue');
  createQueue();
}

function removeFromWatched() {
  localStorage.removeItem('add-to-watch');
  createWatched();
}
