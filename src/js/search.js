import { getAxiosSearchFilms } from './axios'
import { refs } from './DOM';

export  async function getQueryValue(e) {
    e.preventDefault()
    const query = e.target.elements.input.value;

    if (query.trim() === '') {
        makeErrorMassage()
        return;
    }
    const searchFilms = await getAxiosSearchFilms(query)
    if (searchFilms.total_results === 0) {
        makeErrorMassage()
        return
    }
    refs.inputAnswerParEl.innerHTML = ''
    
    return searchFilms
   
}

function makeErrorMassage() {
    refs.inputAnswerParEl.innerHTML = 'Search result not successful. Enter the correct movie name and'

}


// потім
// localStorage.setItem('query', q)

