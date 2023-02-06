import { getAxiosPopularFilms } from '../axios';
import { refs } from '../DOM';
import { makeGalleryMarkup } from './make-home-gallery';
import { createPaginationBtns } from '../pagination-buttons';
import { paginationPopular } from '../pagination';

let page = 1;

const totalPages = 99;
let currentPage = 1;
let containerPaginationPopularEl;

export async function getPopularFilms() {
  refs.filmGalleryHomeEl.innerHTML = '';
  refs.loaderEl.classList.remove('hidden');

  const searchPopularFilms = await getAxiosPopularFilms();

  refs.loaderEl.classList.add('hidden');

  const { results } = searchPopularFilms;
  // const currentPage = searchPopularFilms.page;
  // const totalPages = 99;
  const popularFilms = [...results];
  // console.log('popularFilms', popularFilms);
  const popularFilmsMarkup = makeGalleryMarkup(popularFilms);
  let currentPage = 1;
  refs.filmGalleryHomeEl.innerHTML = popularFilmsMarkup;
  const markup = createPaginationBtns(currentPage, totalPages);

  refs.pageBtns.innerHTML =
    '<ul class="pagination-list-popular  pagination-list"></ul>';
  containerPaginationPopularEl = document.querySelector(
    '.pagination-list-popular'
  );
  containerPaginationPopularEl.innerHTML = markup;
  //================= ПАГІНАЦІЯ =======================
  if (refs.pageBtns) {
    refs.pageBtns.addEventListener('click', async e => {
      if (e.target.nodeName !== 'BUTTON') {
        // return;
      }
      if (+e.target.innerText) {
        console.log('page', page);
        console.log('currentPage', currentPage);

        page = e.target.innerText;
        const searchPopularFilms = await getAxiosPopularFilms(page);
        // totalPages = 99;
        const { results } = searchPopularFilms;
        const popularFilms = [...results];

        const popularFilmsMarkup = makeGalleryMarkup(popularFilms);
        currentPage = +e.target.innerText;
        refs.filmGalleryHomeEl.innerHTML = popularFilmsMarkup;

        const markup = createPaginationBtns(currentPage, totalPages);
        refs.pageBtns.innerHTML =
          '<ul class="pagination-list-popular  pagination-list"></ul>';
        containerPaginationPopularEl = document.querySelector(
          '.pagination-list-popular'
        );
        containerPaginationPopularEl.innerHTML = markup;
      }
      if (e.target.id === 'next') {
        console.log('next', e.target.id);
        console.log('page', page);
        console.log('currentPage', currentPage);

        currentPage++;
        page++;
        const searchPopularFilms = await getAxiosPopularFilms(page);
        const { results } = searchPopularFilms;
        const popularFilms = [...results];

        const popularFilmsMarkup = makeGalleryMarkup(popularFilms);
        refs.filmGalleryHomeEl.innerHTML = popularFilmsMarkup;

        const markup = createPaginationBtns(currentPage, totalPages);
        containerPaginationPopularEl.innerHTML = markup;
      }
      if (e.target.id === 'previos') {
        console.log('next', e.target.id);
        console.log('page', page);
        console.log('currentPage', currentPage);

        currentPage -= 1;
        page -= 1;
        const searchPopularFilms = await getAxiosPopularFilms(page);
        const { results } = searchPopularFilms;
        const popularFilms = [...results];

        const popularFilmsMarkup = makeGalleryMarkup(popularFilms);
        refs.filmGalleryHomeEl.innerHTML = popularFilmsMarkup;

        const markup = createPaginationBtns(currentPage, totalPages);
        containerPaginationPopularEl.innerHTML = markup;
      }
    });
  }
}
