import './js/team-modal';
import './js/scroll';
import './js/header/theme-btn';
import './js/modal/modal';

import { refs } from './js/DOM';
import { getFilmsFromInput } from './js/header/search-query-fetch';
import { getPopularFilms } from './js/create-gallery/get-popular-films';

if (refs.homeBTN.classList.contains('current')) {
  getPopularFilms();
}

if (refs.formEl) {
  refs.formEl.addEventListener('submit', e => getFilmsFromInput(e));
}

import './js/trailer';
import './js/add-to-watch';
import './js/add-to-queue';

import './js/firebase';

import './js/main-anim';

import './js/genres-search/search-genres-func';
