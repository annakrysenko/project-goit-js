import { refs } from "./DOM"
import { getPopularFilms } from "./create-gallery/get-popular-films"
import { getAxiosPopularFilms, getAxiosSearchFilms } from "./axios"
import { makeGalleryMarkup } from "./create-gallery/make-home-gallery"
import { createPaginationBtns } from "./pagination-buttons"



export async function paginationPopular(e) {
    let page = 1
    if (e.target.nodeName === 'UL') {
    return
    } if (e.target.nodeName !== 'UL') {
        refs.filmGalleryHomeEl.innerHTML = '';
        refs.loaderEl.classList.remove('hidden');

        if (e.target.classList.contains('previos')) {
            page -= 1
        }else if (e.target.classList.contains('next')) {
            page += 1
        } else {
            page = Number(e.target.textContent)
        }
        
        const searchPopularFilms = await getAxiosPopularFilms(page);

        refs.loaderEl.classList.add('hidden');

        const { results } = searchPopularFilms;
        const totalPages = 99
        const currentPage = searchPopularFilms.page
        const popularFilms = [...results];
        const popularFilmsMarkup = makeGalleryMarkup(popularFilms);
        
        refs.filmGalleryHomeEl.innerHTML = popularFilmsMarkup;
        createPaginationBtns(currentPage, totalPages)
    }
    
}

export async function paginationInput(ev, query) {
    let page = 1
    if (ev.target.nodeName === 'UL') {
    return
    } if (ev.target.nodeName !== 'UL') {
        refs.filmGalleryHomeEl.innerHTML = '';
        refs.loaderEl.classList.remove('hidden');

        if (ev.target.classList.contains('previos')) {
            page -= 1
        }else if (ev.target.classList.contains('next')) {
            page += 1
        } else {
            page = Number(ev.target.textContent)
        }
        
        const searchFilms = await getAxiosSearchFilms(query, page);

        refs.loaderEl.classList.add('hidden');

        const { results } = searchFilms;
        const totalPages = 99
        const currentPage = searchFilms.page
        const popularFilms = [...results];
        const filmsMarkup = makeGalleryMarkup(popularFilms);
        
        refs.filmGalleryHomeEl.innerHTML = filmsMarkup;
        createPaginationBtns(currentPage, totalPages)
    }
    
}