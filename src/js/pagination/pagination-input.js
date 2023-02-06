
import { refs } from "../DOM"
import { getPopularFilms } from "../create-gallery/get-popular-films"
import { getAxiosPopularFilms, getAxiosSearchFilms } from "../axios"
import { makeGalleryMarkup } from "../create-gallery/make-home-gallery"
import { createPaginationBtns } from "./pagination-buttons"

let page = 1
let request;

export async function paginationInput(ev, query ,totalPages) {
    refs.pageBtns.innerHTML = ''
    refs.pageBtnsInput.innerHTML = ''

    request = query
    
    if (ev.target.nodeName === 'UL' && ev.target.nodeName === 'SPAN') {
        return
    } if (ev.target.nodeName !== 'UL' && ev.target.nodeName !== 'SPAN') {
        refs.filmGalleryHomeEl.innerHTML = '';
        refs.loaderEl.classList.remove('hidden');

        if (ev.target.classList.contains('previos')) {
            page -= 1
        }else if (ev.target.classList.contains('next')) {
            page += 1
        } else {
            page = Number(ev.target.textContent)
        }
        
        const searchFilms = await getAxiosSearchFilms(request, page);

        refs.loaderEl.classList.add('hidden');

        const { results } = searchFilms;
        
        const currentPage = searchFilms.page
        const popularFilms = [...results];
        const searchFilmsMarkup = makeGalleryMarkup(popularFilms);
        
        refs.filmGalleryHomeEl.innerHTML = searchFilmsMarkup;
        const buttonsMurkup = createPaginationBtns(currentPage, totalPages)
        refs.pageBtns.innerHTML = ''
        refs.pageBtnsInput.innerHTML = buttonsMurkup
        
    }
    
}