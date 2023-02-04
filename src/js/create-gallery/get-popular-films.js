import { getAxiosPopularFilms } from '../axios';
import { refs } from '../DOM';
import { makeGalleryMarkup } from './make-home-gallery';
import { createPaginationBtns } from './pagination-buttons';
import { paginationPopular } from './pagination';

export async function getPopularFilms() {
  refs.filmGalleryHomeEl.innerHTML = '';
  refs.loaderEl.classList.remove('hidden');

  const searchPopularFilms = await getAxiosPopularFilms();

  refs.loaderEl.classList.add('hidden');

  const { results } = searchPopularFilms;
  const currentPage = searchPopularFilms.page;
  const totalPages = searchPopularFilms.total_pages
  const popularFilms = [...results];
  const popularFilmsMarkup = makeGalleryMarkup(popularFilms);
  refs.filmGalleryHomeEl.innerHTML = popularFilmsMarkup;
  createPaginationBtns(currentPage, totalPages)
  refs.pageBtns.addEventListener('click', e => paginationPopular(e))
}
