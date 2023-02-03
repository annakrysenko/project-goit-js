import { getAxiosPopularFilms } from '../axios';
import { refs } from '../DOM';
import { makeGalleryMarkup } from './make-home-gallery';

export async function getPopularFilms() {
  refs.filmGalleryHomeEl.innerHTML = '';
  refs.loaderEl.classList.remove('hidden');

  const searchPopularFilms = await getAxiosPopularFilms(1);

  refs.loaderEl.classList.add('hidden');

  const { results } = searchPopularFilms;
  const popularFilms = [...results];
  const popularFilmsMarkup = makeGalleryMarkup(popularFilms);
  refs.filmGalleryHomeEl.innerHTML = popularFilmsMarkup;
}
