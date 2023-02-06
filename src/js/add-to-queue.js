import { refs } from './DOM';
// import { getMovieByID } from './axios';
// import { makeGalleryMarkup } from './create-gallery/make-home-gallery';
// import { cardMovieMarkup } from './create-gallery/cardMovieMarkup';

if (document.querySelector('.button-queue')) {
  document
    .querySelector('.button-queue')
    .addEventListener('click', createQueue);
}

function createQueue() {
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
      const { id, poster_path, title, genresArr, release_date, vote_average } =
        film;
      // console.log(genresArr);
      console.log('poster_path', poster_path);
      let URL;
      if (poster_path) {
        URL = `https://image.tmdb.org/t/p/w500${poster_path}`;
      } else if (!poster_path) {
        URL =
          'https://images.pexels.com/photos/65128/pexels-photo-65128.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2';
      }

      const markupCard = `
   <li class="movie-gallery__item" >
    <div class="movie-gallery__poster" data-id="${id}">
      <img
        class="movie-gallery__photo"
        src="${URL}"
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
      // markupForLibrary += markup;
      // return markupForLibrary;
      return markupCard;
    })
    .join('');
  return markup;
}
