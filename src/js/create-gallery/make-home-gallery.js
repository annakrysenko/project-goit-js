import { cardMovieMarkup } from '../create-gallery/cardMovieMarkup';

export function makeGalleryMarkup(films) {
  console.log(films);
  const markup = films
    .map(film => {
      const { id, poster_path, title, genre_ids, release_date, vote_average } =
        film;

      return cardMovieMarkup(
        id,
        poster_path,
        title,
        genre_ids,
        release_date,
        vote_average
      );
    })
    .join('');

  return markup;
}
