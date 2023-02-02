import { getQueryValue } from './js/search'
import {refs} from './js/DOM'
import { getAxiosPopularFilms } from './js/axios'
import { createPopularMarkup } from './js/popularMarkup'

// Колекция популярных
refs.homeBTN.addEventListener('click', async (e) => {
    e.preventDefault()
    const films = await getAxiosPopularFilms()
    console.log(films);
})


// Пошук по інпуту. Зараз просто консолить об'єкт 
if (refs.formEl) {
    refs.formEl.addEventListener('submit', (e) => getQueryValue(e))
}

    


