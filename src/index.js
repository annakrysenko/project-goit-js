import { getQueryValue } from './js/search';
import { refs } from './js/DOM';
import { getFilmsFromInput } from './js/search';
import { getGenres } from './js/genres';

import { getAxiosPopularFilms } from './js/axios'
import { createPopularMarkup } from './js/popularMarkup'

// Колекция популярных
refs.homeBTN.addEventListener('click', async (e) => {
    e.preventDefault()
    const films = await getAxiosPopularFilms()
    const popularMarkup = await createPopularMarkup(films)
    console.log(popularMarkup);
})

// Пошук по інпуту
if (refs.formEl) {
  refs.formEl.addEventListener('submit', e => getFilmsFromInput(e));
}
