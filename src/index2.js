import './js/team-modal';
import './js/firebase'

import { refs } from './js/DOM';
import { getFilmsFromInput } from './js/search-query-fetch';
import { getPopularFilms } from './js/getPopularFilms';

import { onScroll, onTopBtn } from './js/scroll';

getPopularFilms();

if (refs.formEl) {
  refs.formEl.addEventListener('submit', e => getFilmsFromInput(e));
}
