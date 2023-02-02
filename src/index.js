import { refs } from './js/DOM';
import { getFilmsFromInput } from './js/search-query-fetch';
import './js/team-modal';

if (refs.formEl) {
  refs.formEl.addEventListener('submit', e => getFilmsFromInput(e));
}
