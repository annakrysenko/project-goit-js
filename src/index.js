import './js/team-modal';

import { refs } from './js/DOM';
import { getFilmsFromInput } from './js/search-query-fetch';
import { getPopularFilms } from './js/getPopularFilms';

import { onScroll, onTopBtn } from './js/scroll';
import { addDarkClassToHTML } from './js/theme-btn';
getPopularFilms();

if (refs.formEl) {
  refs.formEl.addEventListener('submit', e => getFilmsFromInput(e));
}
