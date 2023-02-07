import { getAxiosSearchFilms } from '../axios';
import { refs } from '../DOM';
import { makeGalleryMarkup } from '../create-gallery/make-home-gallery';
import { makeErrorMassage } from '../header/arror-mass-header';
import { paginationInput } from '../pagination/pagination-input';
import { createPaginationBtns } from '../pagination/pagination-buttons';

if (refs.formEl) {
  refs.formEl.addEventListener('submit', e => getFilmsFromInput(e));
}

refs.answerInputWrapEl.classList.add('hidden');

if (refs.answerInputWrapEl) {
  refs.answerInputWrapEl.addEventListener('click', eve => {
    refs.answerInputWrapEl.classList.add('hidden');
  });
}

export async function getFilmsFromInput(e) {
  refs.genresListEl.classList.add('hidden');

  e.preventDefault();

  e.preventDefault();
  refs.pageBtns.innerHTML = '';
  refs.pageBtnsInput.innerHTML = '';

  const query = e.target.elements.input.value;

  if (query.trim() === '') {
    refs.answerInputWrapEl.classList.remove('hidden');

    makeErrorMassage();
    return;
  }

  refs.filmGalleryHomeEl.innerHTML = '';
  refs.loaderEl.classList.remove('hidden');

  const searchFilms = await getAxiosSearchFilms(query);
  refs.loaderEl.classList.add('hidden');

  if (searchFilms.total_results === 0) {
    refs.answerInputWrapEl.classList.remove('hidden');

    makeErrorMassage();
    return;
  }

  refs.choiceBtnEl.classList.add('hidden');

  refs.inputAnswerParEl.innerHTML = '';

  const { results } = searchFilms;
  console.log(searchFilms);
  const films = [...results];
  const currentPage = searchFilms.page;
  let totalPages;

  if (searchFilms.total_pages > 99) {
    totalPages = 99;
  } else if (searchFilms.total_pages < 99) {
    totalPages = searchFilms.total_pages;
  }
  console.log(totalPages);
  const galleryMarkup = makeGalleryMarkup(films);

  refs.filmGalleryHomeEl.innerHTML = galleryMarkup;

  const buttonsMurkup = createPaginationBtns(currentPage, totalPages);
  refs.pageBtns.innerHTML = '';
  refs.pageBtnsInput.innerHTML = buttonsMurkup;

  refs.pageBtnsInput.addEventListener('click', ev => {
    if (ev.target === ev.currentTarget || ev.target.nodeName === 'SPAN') {
      console.log(e.target);
      return;
    }

    console.log(ev.target.nodeName);
    paginationInput(ev, query, totalPages);
  });
}
