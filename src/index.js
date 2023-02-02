import { getQueryValue } from './js/search';
import { refs } from './js/DOM';
import { getFilmsFromInput } from './js/search';
import { getGenres } from './js/genres';
import { getPopularFilms } from './js/getPopularFilms';


getPopularFilms()
// Колекция популярных
refs.homeBTN.addEventListener('click',async (e) => {
    await getPopularFilms();
})


// Пошук по інпуту
if (refs.formEl) {
  refs.formEl.addEventListener('submit', e => getFilmsFromInput(e));
}
