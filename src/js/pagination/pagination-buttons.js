import { refs } from "../DOM"


export function createPaginationBtns(currentPage, totalPages) {
    let paginationMarkup = ``
    if (currentPage === 1) {
        paginationMarkup = ` <button class="pgn-current pgn-btn" type="button" disabled>${currentPage}</button>
        <button class="pgn-btn" type="button">2</button>
        <button class="pgn-btn" type="button">3</button>
        <button class="pgn-btn" type="button">4</button>
        <button class="pgn-btn pgn-mobbile" type="button">5</button>
        <span class="pgn-dots">...</span>
        <button class="pgn-btn last-number" type="button">${totalPages}</button>
        <button class="pgn-btn next" type="button">
            <svg class="next" width="20" height="20" viewBox="0 0 32 32">
            <path class="next" d="M19.414 27.414l10-10c0.781-0.781 0.781-2.047 0-2.828l-10-10c-0.781-0.781-2.047-0.781-2.828 0s-0.781 2.047 0 2.828l6.586 6.586h-19.172c-1.105 0-2 0.895-2 2s0.895 2 2 2h19.172l-6.586 6.586c-0.39 0.39-0.586 0.902-0.586 1.414s0.195 1.024 0.586 1.414c0.781 0.781 2.047 0.781 2.828 0z"></path>
            </svg>
        </button>`
    } if (currentPage === 2) {
        paginationMarkup = `
        <button data-action="previos" class="pgn-btn previos" type="button">
            <svg class="previos" width="20" height="20" viewBox="0 0 32 32">
            <path class="previos" d="M12.586 27.414l-10-10c-0.781-0.781-0.781-2.047 0-2.828l10-10c0.781-0.781 2.047-0.781 2.828 0s0.781 2.047 0 2.828l-6.586 6.586h19.172c1.105 0 2 0.895 2 2s-0.895 2-2 2h-19.172l6.586 6.586c0.39 0.39 0.586 0.902 0.586 1.414s-0.195 1.024-0.586 1.414c-0.781 0.781-2.047 0.781-2.828 0z"></path>
            </svg>
        </button>
        <button class="pgn-btn" type="button">1</button>
        <button class="pgn-current pgn-btn" type="button" disabled>${currentPage}</button>
        <button class="pgn-btn" type="button">3</button>
        <button class="pgn-btn pgn-mobbile" type="button">4</button>
        <button class="pgn-btn pgn-mobbile" type="button">5</button>
        <span class="pgn-dots">...</span>
        <button class="pgn-btn last-number" type="button">${totalPages}</button>
        <button class="pgn-btn next" type="button">
            <svg class="next" width="20" height="20" viewBox="0 0 32 32">
            <path class="next" d="M19.414 27.414l10-10c0.781-0.781 0.781-2.047 0-2.828l-10-10c-0.781-0.781-2.047-0.781-2.828 0s-0.781 2.047 0 2.828l6.586 6.586h-19.172c-1.105 0-2 0.895-2 2s0.895 2 2 2h19.172l-6.586 6.586c-0.39 0.39-0.586 0.902-0.586 1.414s0.195 1.024 0.586 1.414c0.781 0.781 2.047 0.781 2.828 0z"></path>
            </svg>
        </button>`
    } if (currentPage === 3) {
        paginationMarkup = `
        <button data-action="previos" class="pgn-btn previos" type="button">
            <svg class="previos" width="20" height="20" viewBox="0 0 32 32">
            <path class="previos" d="M12.586 27.414l-10-10c-0.781-0.781-0.781-2.047 0-2.828l10-10c0.781-0.781 2.047-0.781 2.828 0s0.781 2.047 0 2.828l-6.586 6.586h19.172c1.105 0 2 0.895 2 2s-0.895 2-2 2h-19.172l6.586 6.586c0.39 0.39 0.586 0.902 0.586 1.414s-0.195 1.024-0.586 1.414c-0.781 0.781-2.047 0.781-2.828 0z"></path>
            </svg>
        </button>
        <button class="pgn-btn" type="button">1</button>
        <button class="pgn-btn" type="button">${currentPage - 1}</button>
        <button class="pgn-current pgn-btn" type="button" disabled>${currentPage}</button>
        <button class="pgn-btn" type="button">${currentPage + 1}</button>
        <button class="pgn-btn" type="button">${currentPage + 2}</button>
        <span class="pgn-dots">...</span>
        <button class="pgn-btn last-number" type="button">${totalPages}</button>
        <button class="pgn-btn next" type="button">
            <svg class="next" width="20" height="20" viewBox="0 0 32 32">
            <path class="next" d="M19.414 27.414l10-10c0.781-0.781 0.781-2.047 0-2.828l-10-10c-0.781-0.781-2.047-0.781-2.828 0s-0.781 2.047 0 2.828l6.586 6.586h-19.172c-1.105 0-2 0.895-2 2s0.895 2 2 2h19.172l-6.586 6.586c-0.39 0.39-0.586 0.902-0.586 1.414s0.195 1.024 0.586 1.414c0.781 0.781 2.047 0.781 2.828 0z"></path>
            </svg>
        </button>`
    } if (currentPage > 3 && currentPage < 97) {
        paginationMarkup = `
        <button data-action="previos" class="pgn-btn previos" type="button">
            <svg class="previos" width="20" height="20" viewBox="0 0 32 32">
            <path class="previos" d="M12.586 27.414l-10-10c-0.781-0.781-0.781-2.047 0-2.828l10-10c0.781-0.781 2.047-0.781 2.828 0s0.781 2.047 0 2.828l-6.586 6.586h19.172c1.105 0 2 0.895 2 2s-0.895 2-2 2h-19.172l6.586 6.586c0.39 0.39 0.586 0.902 0.586 1.414s-0.195 1.024-0.586 1.414c-0.781 0.781-2.047 0.781-2.828 0z"></path>
            </svg>
        </button>
        <button class="pgn-btn first-number" type="button">1</button>
        <span class="pgn-dots">...</span>
        <button class="pgn-btn" type="button">${currentPage - 2}</button>
        <button class="pgn-btn" type="button">${currentPage - 1}</button>
        <button class="pgn-current pgn-btn" type="button" disabled>${currentPage}</button>
        <button class="pgn-btn" type="button">${currentPage + 1}</button>
        <button class="pgn-btn" type="button">${currentPage + 2}</button>
        <span class="pgn-dots">...</span>
        <button class="pgn-btn last-number" type="button">${totalPages}</button>
        <button class="pgn-btn next" type="button">
            <svg class="next" width="20" height="20" viewBox="0 0 32 32">
            <path class="next" d="M19.414 27.414l10-10c0.781-0.781 0.781-2.047 0-2.828l-10-10c-0.781-0.781-2.047-0.781-2.828 0s-0.781 2.047 0 2.828l6.586 6.586h-19.172c-1.105 0-2 0.895-2 2s0.895 2 2 2h19.172l-6.586 6.586c-0.39 0.39-0.586 0.902-0.586 1.414s0.195 1.024 0.586 1.414c0.781 0.781 2.047 0.781 2.828 0z"></path>
            </svg>
        </button>`
    } if (currentPage === 97) {
        paginationMarkup = `
        <button data-action="previos" class="pgn-btn previos" type="button">
            <svg class="previos" width="20" height="20" viewBox="0 0 32 32">
            <path class="previos" d="M12.586 27.414l-10-10c-0.781-0.781-0.781-2.047 0-2.828l10-10c0.781-0.781 2.047-0.781 2.828 0s0.781 2.047 0 2.828l-6.586 6.586h19.172c1.105 0 2 0.895 2 2s-0.895 2-2 2h-19.172l6.586 6.586c0.39 0.39 0.586 0.902 0.586 1.414s-0.195 1.024-0.586 1.414c-0.781 0.781-2.047 0.781-2.828 0z"></path>
            </svg>
        </button>
        <button class="pgn-btn first-number" type="button">1</button>
        <span class="pgn-dots">...</span>
        <button class="pgn-btn" type="button">${currentPage - 2}</button>
        <button class="pgn-btn" type="button">${currentPage - 1}</button>
        <button class="pgn-current pgn-btn" type="button" disabled>${currentPage}</button>
        <button class="pgn-btn" type="button">${currentPage + 1}</button>
        <button class="pgn-btn" type="button">${totalPages}</button>
        <button class="pgn-btn next" type="button">
            <svg class="next" width="20" height="20" viewBox="0 0 32 32">
            <path class="next" d="M19.414 27.414l10-10c0.781-0.781 0.781-2.047 0-2.828l-10-10c-0.781-0.781-2.047-0.781-2.828 0s-0.781 2.047 0 2.828l6.586 6.586h-19.172c-1.105 0-2 0.895-2 2s0.895 2 2 2h19.172l-6.586 6.586c-0.39 0.39-0.586 0.902-0.586 1.414s0.195 1.024 0.586 1.414c0.781 0.781 2.047 0.781 2.828 0z"></path>
            </svg>
        </button>`
    } if (currentPage === 98) {
        paginationMarkup = `
        <button data-action="previos" class="pgn-btn previos" type="button">
            <svg class="previos" width="20" height="20" viewBox="0 0 32 32">
            <path class="previos" d="M12.586 27.414l-10-10c-0.781-0.781-0.781-2.047 0-2.828l10-10c0.781-0.781 2.047-0.781 2.828 0s0.781 2.047 0 2.828l-6.586 6.586h19.172c1.105 0 2 0.895 2 2s-0.895 2-2 2h-19.172l6.586 6.586c0.39 0.39 0.586 0.902 0.586 1.414s-0.195 1.024-0.586 1.414c-0.781 0.781-2.047 0.781-2.828 0z"></path>
            </svg>
        </button>
        <button class="pgn-btn first-number" type="button">1</button>
        <span class="pgn-dots">...</span>
        <button class="pgn-btn pgn-mobbile" type="button">95</button>
        <button class="pgn-btn pgn-mobbile" type="button">96</button>
        <button class="pgn-btn" type="button">97</button>
        <button class="pgn-current pgn-btn" type="button" disabled>${currentPage}</button>
        <button class="pgn-btn" type="button">${totalPages}</button>
        <button class="pgn-btn next" type="button">
            <svg class="next" width="20" height="20" viewBox="0 0 32 32">
            <path class="next" d="M19.414 27.414l10-10c0.781-0.781 0.781-2.047 0-2.828l-10-10c-0.781-0.781-2.047-0.781-2.828 0s-0.781 2.047 0 2.828l6.586 6.586h-19.172c-1.105 0-2 0.895-2 2s0.895 2 2 2h19.172l-6.586 6.586c-0.39 0.39-0.586 0.902-0.586 1.414s0.195 1.024 0.586 1.414c0.781 0.781 2.047 0.781 2.828 0z"></path>
            </svg>
        </button>`
    } if (currentPage === 99) {
        paginationMarkup = ` 
        <button data-action="previos" class="pgn-btn previos" type="button">
            <svg class="previos" width="20" height="20" viewBox="0 0 32 32">
            <path class="previos" d="M12.586 27.414l-10-10c-0.781-0.781-0.781-2.047 0-2.828l10-10c0.781-0.781 2.047-0.781 2.828 0s0.781 2.047 0 2.828l-6.586 6.586h19.172c1.105 0 2 0.895 2 2s-0.895 2-2 2h-19.172l6.586 6.586c0.39 0.39 0.586 0.902 0.586 1.414s-0.195 1.024-0.586 1.414c-0.781 0.781-2.047 0.781-2.828 0z"></path>
            </svg>
        </button>
        <button class="pgn-btn first-number" type="button">1</button>
        <span class="pgn-dots">...</span>
        <button class="pgn-btn pgn-mobbile" type="button">95</button>
        <button class="pgn-btn" type="button">96</button>
        <button class="pgn-btn" type="button">97</button>
        <button class="pgn-btn" type="button">98</button>
        <button class="pgn-current pgn-btn" type="button" disabled>${currentPage}</button>`
    }
    refs.pageBtns.innerHTML = paginationMarkup
}