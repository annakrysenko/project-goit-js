import { getAxiosSearchFilms } from './axios';
import { refs } from './DOM';
import { makeGalleryMarkup } from './make-home-gallery';
import { makeErrorMassage } from './arror-mass-header';

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
  const films = [...results];

  const galleryMarkup = makeGalleryMarkup(films);

  refs.filmGalleryHomeEl.innerHTML = galleryMarkup;
}

// потім

// localStorage.setItem('query', q)
