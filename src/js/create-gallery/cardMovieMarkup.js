import { genresAll } from '../genres';

const BASE_URL = 'https://image.tmdb.org/t/p/w500';

export function cardMovieMarkup(
  id,
  poster_path,
  title,
  genre_ids,
  release_date,
  vote_average
) {
  // console.log(poster_path);
  //   let poster_url = `${BASE_URL}${poster_path}`;
  //   if (!poster_path) {
  //     console.log('no poster ', id, poster_path, 'poster_path');
  //     poster_path =
  //       'https://cdn.pixabay.com/photo/2017/06/02/22/01/dog-2367414_1280.png';
  //   }

  let genresNames = genre_ids.map(genre => genresAll[genre]).join(', ');
  let releaseDate = release_date.slice(0, 4);
  let markup = `
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
        <p class="movie-info__genre">${genresNames} | ${releaseDate}</p>
         <span class="movie-info__vote">IMDb: ${vote_average}</span>
      </div>
    </div>
  </li>`;

  return markup;
}

//  <span class="movie-info__slash> | </span>
//         <p class="movie-info__year"> ${releaseDate}</p>
