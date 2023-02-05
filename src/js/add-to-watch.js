import { refs } from './DOM';
// import { getMovieByID } from './axios';
// import { makeGalleryMarkup } from './create-gallery/make-home-gallery';
// import { cardMovieMarkup } from './create-gallery/cardMovieMarkup';

if (document.querySelector('.button-watched')) {
  document
    .querySelector('.button-watched')
    .addEventListener('click', getMoviesFromAPI);
}

function getMoviesFromAPI() {
  const saveMovie = localStorage.getItem('add-to-watch');
  //   console.log(saveMovie);
  const parseMovie = JSON.parse(saveMovie);
  //   console.log(parseMovie);

  //   console.log(typeof parseMovie);
  let markupForLibrary = '';
  for (let film of parseMovie) {
    const { id, poster_path, title, genresArr, release_date, vote_average } =
      film;
    // console.log(genresArr);
    const BASE_URL = 'https://image.tmdb.org/t/p/w500';
    const markup = `
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
        <p class="movie-info__genre">${genresArr} | ${release_date}</p>
         <span class="movie-info__vote">IMDb: ${vote_average}</span>
      </div>
    </div>
  </li>`;
    // console.log(markup);
    markupForLibrary += markup;
  }

  console.log('markupForLibrary===>>>', markupForLibrary);
  refs.filmGalleryLibraryEl.innerHTML = markupForLibrary;
}
