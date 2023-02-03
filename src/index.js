import './js/team-modal';

import { refs } from './js/DOM';
import { getFilmsFromInput } from './js/search-query-fetch';
import { getPopularFilms } from './js/getPopularFilms';


getPopularFilms()
// Колекция популярных
refs.homeBTN.addEventListener('click',async (e) => {
    await getPopularFilms();
})




if (refs.formEl) {
  refs.formEl.addEventListener('submit', e => getFilmsFromInput(e));
}
