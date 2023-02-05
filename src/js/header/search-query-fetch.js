import { getAxiosSearchFilms } from '../axios';
import { refs } from '../DOM';
import { makeGalleryMarkup } from '../create-gallery/make-home-gallery';
import { makeErrorMassage } from '../header/arror-mass-header';
import { paginationInput } from '../pagination/pagination-input';
import { createPaginationBtns } from '../pagination/pagination-buttons';

export async function getFilmsFromInput(e) {
  e.preventDefault();
  const query = e.target.elements.input.value;

  if (query.trim() === '') {
    makeErrorMassage();
    return;
  }
  refs.filmGalleryHomeEl.innerHTML = '';
  refs.loaderEl.classList.remove('hidden');

  const searchFilms = await getAxiosSearchFilms(query);

  refs.loaderEl.classList.add('hidden');

  if (searchFilms.total_results === 0) {
    makeErrorMassage();
    return;
  }
  refs.inputAnswerParEl.innerHTML = '';

  const { results } = searchFilms;
  console.log(searchFilms);
  const films = [...results];
  const currentPage = searchFilms.page;
  let totalPages;

  if (searchFilms.total_pages > 99) {
            totalPages = 99
        } else {
            totalPages = searchFilms.total_pages
        }

  const galleryMarkup = makeGalleryMarkup(films);

  refs.filmGalleryHomeEl.innerHTML = galleryMarkup;
  
  const buttonsMurkup = createPaginationBtns(currentPage, totalPages)
  refs.pageBtns.innerHTML = ''
  refs.pageBtnsInput.innerHTML = buttonsMurkup
  refs.pageBtnsInput.addEventListener('click', ev => paginationInput(ev, query, totalPages))
}

// потім

// localStorage.setItem('query', q)
