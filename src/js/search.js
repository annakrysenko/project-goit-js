import { refs } from "./DOM";
import {getAxiosSearchFilms } from './axios'

export  async function getQueryValue(e) {
    e.preventDefault()
    const query = e.target.elements.input.value;

    if (query === '') {
        //
        return;
    }
    const searchFilms = await getAxiosSearchFilms(query)
    console.log(searchFilms)
    // localStorage.setItem('query', q)
}