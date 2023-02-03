import { cardMovieMarkup } from './cardMovieMarkup';

export function makeGalleryMarkup(films) {
  const markup = films
    .map(film => {

      const {
        id,
        poster_path,
        original_title,
        genres_id,
        release_date,
        vote_average,
      } = film;


      

      return cardMovieMarkup(
        id,
        poster_path,
        original_title,
        genres_id,
        release_date,
        vote_average
      );
    })
    .join('');
  
  return markup;
}
