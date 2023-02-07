import { getAxiosPopularFilms } from '../axios';
import { makeGalleryMarkup } from '../create-gallery/make-home-gallery';
import { refs } from '../DOM';
import { genresAll } from '../genres';
import { createPaginationBtns } from '../pagination/pagination-buttons';
import { createGenresMarkup } from './genres-markup';
import { createPaginationBtns } from '../pagination/pagination-buttons';

refs.genresListEl.classList.add('hidden');

const genresForMarkUp = Object.values(genresAll);

if (refs.homeBTN.classList.contains('current')) {
  const markUpGenresList = genresForMarkUp
    .map(genre => createGenresMarkup(genre))
    .join('');
  refs.genresListEl.innerHTML = markUpGenresList;

  if (refs.choiceBtnEl) {
    refs.choiceBtnEl.addEventListener('click', ev => {
      refs.genresListEl.classList.toggle('hidden');
      refs.choiceBtnEl.classList.toggle('active');
    });
  }

  if (refs.genresListEl) {
    refs.genresListEl.addEventListener('click', event => {
      if (event.target.nodeName !== 'BUTTON') {
        return;
      }

      onClickGenre(event);
    });
  }
}

async function onClickGenre(event) {
  // refs.choiceBtnEl.classList.toggle('hidden');

  event.currentTarget.childNodes.forEach(el =>
    el.children[0].classList.remove('active')
  );
  event.target.classList.add('active');

  const includesGenre = [];
  const ArrPages = [];

  const genre = event.target.textContent;
   refs.filmGalleryHomeEl.innerHTML = '';
  refs.loaderEl.classList.remove('hidden');
  for (let page = 1; page < 100; page++) {
    const searchPopularFilms = await searchPopularFilmsFunc(page);
    makeArrFilms(searchPopularFilms, genre);
  }
  for (let startFilm = 0; startFilm < includesGenre.length; startFilm += 20) {
    const page_pagination = [];
    for (let plus = 0; plus < 20; plus++) {
      if (!includesGenre[startFilm + plus]) {
        break;
      }
      page_pagination.push(includesGenre[startFilm + plus]);
    }
    ArrPages.push(page_pagination);
  }

  const markupGallery = makeGalleryMarkup(ArrPages[0]);
  refs.filmGalleryHomeEl.innerHTML = markupGallery;
  // console.log('ArrPages', ArrPages);
  // ====== pagination buttons ===========
  refs.pageBtns.innerHTML = '';

  let currentPage = 1;
  const totalPages = ArrPages.length;
  const buttonsMarkup = createPaginationBtns(currentPage, totalPages);
  refs.pageBtnsGenres.innerHTML = buttonsMarkup;
  refs.loaderEl.classList.add('hidden');

  refs.pageBtnsGenres.addEventListener('click', ev => {
    if (ev.target === ev.currentTarget || ev.target.nodeName === 'SPAN') {
      return;
    }
    if (ev.target.classList.contains('previos')) {
      refs.pageBtns.innerHTML = '';
      refs.pageBtnsGenres.innerHTML = '';
      // currentPage = +ev.target.textContent;
      console.log(currentPage);
      currentPage -= 1;
      const buttonsMarkup = createPaginationBtns(currentPage, totalPages);
      refs.pageBtnsGenres.innerHTML = buttonsMarkup;

      const markupGallery = makeGalleryMarkup(ArrPages[currentPage - 1]);
      refs.filmGalleryHomeEl.innerHTML = markupGallery;
      refs.loaderEl.classList.add('hidden');
    }
    if (ev.target.classList.contains('next')) {
      refs.pageBtns.innerHTML = '';
      refs.pageBtnsGenres.innerHTML = '';
      // currentPage = +ev.target.textContent;
      console.log(currentPage);
      currentPage += 1;
      const buttonsMarkup = createPaginationBtns(currentPage, totalPages);
      refs.pageBtnsGenres.innerHTML = buttonsMarkup;

      const markupGallery = makeGalleryMarkup(ArrPages[currentPage - 1]);
      refs.filmGalleryHomeEl.innerHTML = markupGallery;
    }
    if (
      !ev.target.classList.contains('previos') &&
      !ev.target.classList.contains('next')
    ) {
      refs.pageBtns.innerHTML = '';
      refs.pageBtnsGenres.innerHTML = '';
      currentPage = +ev.target.textContent;
      const buttonsMarkup = createPaginationBtns(currentPage, totalPages);
      refs.pageBtnsGenres.innerHTML = buttonsMarkup;

      const markupGallery = makeGalleryMarkup(ArrPages[currentPage - 1]);
      refs.filmGalleryHomeEl.innerHTML = markupGallery;
    }
  });
  //=======================================================================
  async function searchPopularFilmsFunc(page = 1) {
    const searchPopularFilms = await getAxiosPopularFilms(page);
    const { results } = searchPopularFilms;
    const popularFilms = [...results];
    return popularFilms;
  }

  function makeArrFilms(popularFilms, genre) {
    popularFilms.map(film => {
      const genresNames = film.genre_ids
        .map(genre => genresAll[genre])
        .join(', ');

      if (genresNames.includes(genre)) {
        includesGenre.push(film);
      }
    });
  }
}
