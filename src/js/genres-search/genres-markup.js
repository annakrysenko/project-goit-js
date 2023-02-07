import { refs } from '../DOM';

export function createGenresMarkup(genre) {
  const markup = `<li class='genres-list__item'>
    <button class='btn-genre'>${genre}</button>
    </li>`;
  return markup;
}
