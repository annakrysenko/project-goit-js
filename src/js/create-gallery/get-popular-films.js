import { getAxiosPopularFilms } from '../axios';
import { refs } from '../DOM';
import { makeGalleryMarkup } from './make-home-gallery';
import { createPaginationBtns } from '../pagination/pagination-buttons';
import { paginationPopular } from '../pagination/pagination-popular';


export async function getPopularFilms() {
refs.pageBtns.innerHTML = ''
        refs.pageBtnsInput.innerHTML = ''

  refs.filmGalleryHomeEl.innerHTML = '';
  refs.loaderEl.classList.remove('hidden');

  const searchPopularFilms = await getAxiosPopularFilms();

  refs.loaderEl.classList.add('hidden');

  const { results } = searchPopularFilms;
  const currentPage = searchPopularFilms.page;
  const totalPages = 99;
  const popularFilms = [...results];
  const popularFilmsMarkup = makeGalleryMarkup(popularFilms);

  refs.filmGalleryHomeEl.innerHTML = popularFilmsMarkup;
  const buttonsMurkup = createPaginationBtns(currentPage, totalPages)
        refs.pageBtnsInput.innerHTML = ''
        refs.pageBtns.innerHTML = buttonsMurkup


  refs.pageBtns.addEventListener('click', e => {
    console.log(e.target.nodeName);
    if (e.target === e.currentTarget && e.target.nodeName === 'SPAN') {
      console.log(e.target);
    return 
    }
    paginationPopular(e)
  })
}
