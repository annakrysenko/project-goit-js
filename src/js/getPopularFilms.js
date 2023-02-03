import { getAxiosPopularFilms } from './axios';
import { refs } from './DOM';
import { makeGalleryMarkup } from './make-home-gallery';


export async function getPopularFilms() {
    const searchPopularFilms = await getAxiosPopularFilms(1);
    const { results } = searchPopularFilms;
    const popularFilms = [...results];
    const popularFilmsMarkup = makeGalleryMarkup(popularFilms);
    refs.filmGalleryHomeEl.innerHTML = popularFilmsMarkup;
}