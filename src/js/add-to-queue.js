import { refs } from './DOM';
// import { getMovieByID } from './axios';
// import { makeGalleryMarkup } from './create-gallery/make-home-gallery';
// import { cardMovieMarkup } from './create-gallery/cardMovieMarkup';

if (document.querySelector('.button-queue')) {
  document.querySelector('.button-queue').addEventListener('click', createQueue);
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
    console.log('nothing');
    return '<p>Nothing here yet</p>';
  }
  console.log('saveMovie', saveMovie);
  const parseMovie = JSON.parse(saveMovie);
  console.log('parseMovie', parseMovie);

  //   console.log(typeof parseMovie);
  // let markupForLibrary = '';
  const markup = parseMovie
    .map(film => {
      const { id, poster_path, title, genresArr, release_date, vote_average } = film;
      // console.log(genresArr);
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
      // console.log(markup);
      // markupForLibrary += markup;
      // return markupForLibrary;
      return markupCard;
    })
    .join('');
  return markup;
}
refs.libRemoveBtn.addEventListener('click', removeFromQueue);

function removeFromQueue(e) {
  if (e.target === 'add-to-queue') {
    localStorage.clear();
  }
}
