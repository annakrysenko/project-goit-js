import { getQueryValue } from './js/search';
import { refs } from './js/DOM';
import { getFilmsFromInput } from './js/search';
import { getGenres } from './js/genres';
import './js/team-modal';
if (refs.formEl) {
  refs.formEl.addEventListener('submit', e => getFilmsFromInput(e));
}
