import { cardMovieMarkup } from './cardMovieMarkup';

export function makeGalleryMarkup(films) {
  const markup = films
    .map(film => {
      const { id, poster_path, title, genres_id, release_date, vote_average } =
        film;
       const releaseDate = release_date.slice(0, 4)
      return cardMovieMarkup(
        id,
        poster_path,
        title,
        genres_id,
        releaseDate,
        vote_average
      );
    })
    .join('');
  
  return markup;
}
