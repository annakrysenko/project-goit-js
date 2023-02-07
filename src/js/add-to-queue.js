import { refs } from './DOM';

if (document.querySelector('.button-queue')) {
  document.querySelector('.button-queue').addEventListener('click', createQueue);
  createQueue();
}

function createQueue() {
  document.querySelector('.button-watched').classList.remove('current');
  document.querySelector('.button-queue').classList.add('current');

  const markup = getMoviesQueue();
  refs.filmGalleryLibraryEl.innerHTML = markup;
}

function getMoviesQueue() {
  const saveMovie = localStorage.getItem('add-to-queue');
  if (!saveMovie) {
    if (document.querySelector('.button-remove')) {
      document.querySelector('.button-remove').classList.add('vis-hidden');
    }
    console.log('nothing');
    return '<p>Nothing here yet</p>';
  }
  console.log('saveMovie', saveMovie);
  const parseMovie = JSON.parse(saveMovie);
  console.log('parseMovie', parseMovie);

  const markup = parseMovie
    .map(film => {
      const { id, poster_path, title, genresArr, releaseDate, vote_average } = film;
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

if (document.querySelector('.button-remove')) {
  document.querySelector('.button-remove').addEventListener('click', onClickRemove);
}

function onClickRemove() {
  const btnQ = document.querySelector('.button-queue');
  const btnW = document.querySelector('.button-wached');
  if (btnQ.className === 'button-queue current') {
    removeFromQueue();
  } else if (btnW.className === 'button-wached current') {
    removeFromWatched();
  }
}

function removeFromQueue() {
  localStorage.removeItem('add-to-queue');
}

function removeFromWatched() {
  localStorage.removeItem('add-to-watch');
}
