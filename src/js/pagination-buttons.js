import { refs } from "./DOM"

export function createPaginationBtns(currentPage, totalPages) {
    let paginationMarkup = ``
    if (currentPage === 1) {
        paginationMarkup = ` <span class="pgn-current">${currentPage}</span>
        <button class="pgn-btn" type="button">2</button>
        <button class="pgn-btn" type="button">3</button>
        <button class="pgn-btn" type="button">4</button>
        <span class="pgn-dots">...</span>
        <button class="pgn-btn" type="button">${totalPages}</button>
        <button data-action="next" class="pgn-btn next" type="button">next</button>`
    } if (currentPage === 2) {
        paginationMarkup = `<button data-action="previos" class="pgn-btn previosly" type="button">previosly</button>
        <button class="pgn-btn" type="button">1</button>
        <span class="pgn-current">${currentPage}</span>
        <button class="pgn-btn" type="button">3</button>
        <span class="pgn-dots">...</span>
        <button class="pgn-btn" type="button">${totalPages}</button>
        <button data-action="next" class="pgn-btn next" type="button">next</button>`
    } if (currentPage > 2 && currentPage < totalPages) {
        paginationMarkup = `<button data-action="next" class="pgn-btn previos" type="button">previosly</button>
        <button class="pgn-btn" type="button">1</button>
        <span class="pgn-dots">...</span>
        <button class="pgn-btn" type="button">${currentPage - 2}</button>
        <button class="pgn-btn" type="button">${currentPage - 1}</button>
        <span class="pgn-current">${currentPage}</span>
        <button class="pgn-btn" type="button">${currentPage + 1}</button>
        <button class="pgn-btn" type="button">${currentPage + 2}</button>
        <span class="pgn-dots">...</span>
        <button class="pgn-btn" type="button">${totalPages}</button>
        <button data-action="next" class="pgn-btn next" type="button">next</button>`
    }
    refs.pageBtns.innerHTML = paginationMarkup 
}