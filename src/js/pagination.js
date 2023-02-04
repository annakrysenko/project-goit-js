import { refs } from "./DOM"
import { getPopularFilms } from "./get-popular-films"
import { getAxiosPopularFilms } from "./axios"
import { makeGalleryMarkup } from "./make-home-gallery"
import { createPaginationBtns } from "./pagination-buttons"

let page = 1

export async function paginationPopular(e) {
    
    if (e.target.nodeName !== 'BUTTON') {
    return
    } if (e.target.nodeName === 'BUTTON') {
        refs.filmGalleryHomeEl.innerHTML = '';
        refs.loaderEl.classList.remove('hidden');

        if (e.target.classList.contains('next')) {
            page += 1
        }if (e.target.classList.contains('previos')) {
            page -= 1
        } else {
            page = Number(e.target.textContent)
        }
        console.log(page);
        const searchPopularFilms = await getAxiosPopularFilms(page);

        refs.loaderEl.classList.add('hidden');

        const { results } = searchPopularFilms;
        const totalPages = searchPopularFilms.total_pages
        const currentPage = searchPopularFilms.page
        const popularFilms = [...results];
        const popularFilmsMarkup = makeGalleryMarkup(popularFilms);
console.log(currentPage);

        refs.filmGalleryHomeEl.innerHTML = popularFilmsMarkup;
        createPaginationBtns(currentPage, totalPages)
    }
    
}