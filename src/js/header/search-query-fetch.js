import { getAxiosSearchFilms } from '../axios';
import { refs } from '../DOM';
import { makeGalleryMarkup } from '../create-gallery/make-home-gallery';
import { makeErrorMassage } from '../header/arror-mass-header';
import { paginationInput } from '../pagination';
import { createPaginationBtns } from '../pagination-buttons';

let page;
let currentPage;
let query;
let totalPages;
let containerPaginationInputEl;
export async function getFilmsFromInput(e) {
  e.preventDefault();
  query = e.target.elements.input.value;
  console.log('query', query);

  if (query.trim() === '') {
    makeErrorMassage();
    return;
  }
  refs.filmGalleryHomeEl.innerHTML = '';
  refs.loaderEl.classList.remove('hidden');

  const searchFilms = await getAxiosSearchFilms(query);
  page = 1;
  currentPage = 1;
  refs.loaderEl.classList.add('hidden');

  if (searchFilms.total_results === 0) {
    makeErrorMassage();
    return;
  }
  refs.inputAnswerParEl.innerHTML = '';

  const { results } = searchFilms;
  const films = [...results];
  currentPage = searchFilms.page;
  totalPages = searchFilms.total_pages;
  console.log('totalPages', totalPages);
  const galleryMarkup = makeGalleryMarkup(films);

  refs.filmGalleryHomeEl.innerHTML = galleryMarkup;
  const markup = createPaginationBtns(currentPage, totalPages);
  refs.pageBtns.innerHTML =
    '<ul class="pagination-list-input  pagination-list"></ul>';
  containerPaginationInputEl = document.querySelector('.pagination-list-input');
  containerPaginationInputEl.innerHTML = markup;
  // ================= ПАГІНАЦІЯ =================
  if (containerPaginationInputEl) {
    containerPaginationInputEl.addEventListener('click', async e => {
      if (e.target.nodeName !== 'BUTTON') {
        // return;
      }
      if (+e.target.innerText) {
        page = +e.target.innerText;
        console.log('page', page);
        //  console.log('currentPage', currentPage);
        //  console.log('searchFilms', searchFilms);
        const searchPopularFilms = await getAxiosSearchFilms(page, query);
        // totalPages = 99;
        const { results } = searchPopularFilms;
        const popularFilms = [...results];

        const popularFilmsMarkup = makeGalleryMarkup(popularFilms);
        currentPage = +e.target.innerText;
        console.log('currentPage', currentPage);

        refs.filmGalleryHomeEl.innerHTML = popularFilmsMarkup;

        const markup = createPaginationBtns(currentPage, totalPages);

        containerPaginationInputEl.innerHTML = markup;
      }
      if (e.target.id === 'next') {
        console.log('next', e.target.id);
        console.log('page', page);
        console.log('query', query);

        currentPage++;
        page++;
        const searchPopularFilms = await getAxiosSearchFilms(page);
        const { results } = searchPopularFilms;
        const popularFilms = [...results];

        const popularFilmsMarkup = makeGalleryMarkup(popularFilms);
        refs.filmGalleryHomeEl.innerHTML = popularFilmsMarkup;

        const markup = createPaginationBtns(currentPage, totalPages);
        containerPaginationInputEl.innerHTML = markup;
      }
      if (e.target.id === 'previos') {
        console.log('next', e.target.id);
        console.log('page', page);
        console.log('currentPage', currentPage);

        currentPage -= 1;
        page -= 1;
        const searchPopularFilms = await getAxiosSearchFilms(page);
        const { results } = searchPopularFilms;
        const popularFilms = [...results];

        const popularFilmsMarkup = makeGalleryMarkup(popularFilms);
        refs.filmGalleryHomeEl.innerHTML = popularFilmsMarkup;

        const markup = createPaginationBtns(currentPage, totalPages);
        containerPaginationInputEl.innerHTML = markup;
      }
    });
  }
}

// потім

// localStorage.setItem('query', q)
