import { refs } from './DOM';
// import { getMovieByID } from './axios';
// import { makeGalleryMarkup } from './create-gallery/make-home-gallery';
// import { cardMovieMarkup } from './create-gallery/cardMovieMarkup';

if (document.querySelector('.button-watched')) {
  document.querySelector('.button-watched').addEventListener('click', createWatched);
}

function createWatched() {
  document.querySelector('.button-watched').classList.add('current');
  document.querySelector('.button-queue').classList.remove('current');
  const markup = getMovies();

  refs.filmGalleryLibraryEl.innerHTML = markup;
}

function getMovies() {
  const saveMovie = localStorage.getItem('add-to-watch');
  if (!saveMovie) {
    return '<p>Nothing here yet</p>';
  }
  //   console.log(saveMovie);
  const parseMovie = JSON.parse(saveMovie);
  console.log('parseMovie', parseMovie);

  //   console.log(typeof parseMovie);
  // let markupForLibrary = '';
  const markup = parseMovie
    .map(film => {
      const { id, poster_path, title, genresArr, releaseDate, vote_average } = film;
      const avarage = vote_average.toFixed(1);

      // console.log(genresArr);
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

function removeFromWatched() {
  const savedM = localStorage.getItem('add-to-watch');
  if (savedM === '') {
  } else {
    localStorage.removeItem('add-to-watch');
    refs.filmGalleryLibraryEl.innerHTML = '';
    // document.querySelector('.button-remove').hidden = true;
  }
}
