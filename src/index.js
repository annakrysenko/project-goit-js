import './js/team-modal';

import { refs } from './js/DOM';
import { getFilmsFromInput } from './js/search-query-fetch';
import { getPopularFilms } from './js/get-popular-films';

import './js/scroll';

getPopularFilms();

if (refs.formEl) {
  refs.formEl.addEventListener('submit', e => getFilmsFromInput(e));
}
