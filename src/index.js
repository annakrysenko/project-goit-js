import { getQueryValue } from './js/search';
import { refs } from './js/DOM';
import './js/team-modal';

// Пошук по інпуту. Зараз просто консолить об'єкт
if (refs.formEl) {
  refs.formEl.addEventListener('submit', e => getFilmsFromInput(e));
}
