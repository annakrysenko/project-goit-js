import { getAxiosPopularFilms } from "module";
import { libraryMovieMarkup } from "./libraryMovieMarkup";

export async function createPopularMarkup(films) {
    films.results.map(film => {
        const popularMarkup = libraryMovieMarkup(film).join('')
        return popularMarkup
    })
}