import { refs } from './DOM';

export function createPaginationBtns(currentPage, totalPages) {
  let paginationMarkup = ``;
  if (currentPage === 1) {
    console.log('da');
    paginationMarkup = ` <button class="pgn-current pgn-btn" type="button" >${currentPage}</button>
        <button class="pgn-btn" type="button">2</button>
        <button class="pgn-btn" type="button">3</button>
        <button class="pgn-btn" type="button">4</button>
        <button class="pgn-btn pgn-mobbile" type="button">5</button>
        <span class="pgn-dots">...</span>
        <button class="pgn-btn last-number" type="button">${totalPages}</button>
            <svg class="next"  id='next' width="20" height="20"  fill='none' viewBox="0 0 32 32">
            <path  id='next' d="M19.414 27.414l10-10c0.781-0.781 0.781-2.047 0-2.828l-10-10c-0.781-0.781-2.047-0.781-2.828 0s-0.781 2.047 0 2.828l6.586 6.586h-19.172c-1.105 0-2 0.895-2 2s0.895 2 2 2h19.172l-6.586 6.586c-0.39 0.39-0.586 0.902-0.586 1.414s0.195 1.024 0.586 1.414c0.781 0.781 2.047 0.781 2.828 0z"></path>
            </svg>
        `;
  }
  if (currentPage === 2) {
    paginationMarkup = `
        
            <svg  class="previos" width="20" id='previos' height="20" fill='none' viewBox="0 0 32 32">
            <path  id='previos' d="M12.586 27.414l-10-10c-0.781-0.781-0.781-2.047 0-2.828l10-10c0.781-0.781 2.047-0.781 2.828 0s0.781 2.047 0 2.828l-6.586 6.586h19.172c1.105 0 2 0.895 2 2s-0.895 2-2 2h-19.172l6.586 6.586c0.39 0.39 0.586 0.902 0.586 1.414s-0.195 1.024-0.586 1.414c-0.781 0.781-2.047 0.781-2.828 0z"></path>
            </svg>
        
        <button class="pgn-btn" type="button">1</button>
        <button class="pgn-current pgn-btn" type="button" >${currentPage}</button>
        <button class="pgn-btn" type="button">3</button>
        <button class="pgn-btn pgn-mobbile" type="button">4</button>
        <button class="pgn-btn pgn-mobbile" type="button">5</button>
        <span class="pgn-dots">...</span>
        <button class="pgn-btn last-number" type="button">${totalPages}</button>
        
            <svg  id='next' class="next" width="20" height="20" fill='none' viewBox="0 0 32 32">
            <path  id='next' d="M19.414 27.414l10-10c0.781-0.781 0.781-2.047 0-2.828l-10-10c-0.781-0.781-2.047-0.781-2.828 0s-0.781 2.047 0 2.828l6.586 6.586h-19.172c-1.105 0-2 0.895-2 2s0.895 2 2 2h19.172l-6.586 6.586c-0.39 0.39-0.586 0.902-0.586 1.414s0.195 1.024 0.586 1.414c0.781 0.781 2.047 0.781 2.828 0z"></path>
            </svg>
        `;
  }
  if (currentPage === 3) {
    paginationMarkup = `
        
            <svg  width="20" class="previos" id='previos' height="20" fill='none' viewBox="0 0 32 32">
            <path  id='previos' d="M12.586 27.414l-10-10c-0.781-0.781-0.781-2.047 0-2.828l10-10c0.781-0.781 2.047-0.781 2.828 0s0.781 2.047 0 2.828l-6.586 6.586h19.172c1.105 0 2 0.895 2 2s-0.895 2-2 2h-19.172l6.586 6.586c0.39 0.39 0.586 0.902 0.586 1.414s-0.195 1.024-0.586 1.414c-0.781 0.781-2.047 0.781-2.828 0z"></path>
            </svg>
        
        <button class="pgn-btn" type="button">1</button>
        <button class="pgn-btn" type="button">${currentPage - 1}</button>
        <button class="pgn-current pgn-btn" type="button" >${currentPage}</button>
        <button class="pgn-btn" type="button">${currentPage + 1}</button>
        <button class="pgn-btn" type="button">${currentPage + 2}</button>
        <span class="pgn-dots">...</span>
        <button class="pgn-btn last-number" type="button">${totalPages}</button>
        
            <svg  id='next' class="next"  width="20" height="20" fill='none' viewBox="0 0 32 32">
            <path id='next' d="M19.414 27.414l10-10c0.781-0.781 0.781-2.047 0-2.828l-10-10c-0.781-0.781-2.047-0.781-2.828 0s-0.781 2.047 0 2.828l6.586 6.586h-19.172c-1.105 0-2 0.895-2 2s0.895 2 2 2h19.172l-6.586 6.586c-0.39 0.39-0.586 0.902-0.586 1.414s0.195 1.024 0.586 1.414c0.781 0.781 2.047 0.781 2.828 0z"></path>
            </svg>
        `;
  }
  if (currentPage > 3 && currentPage < 97) {
    paginationMarkup = `
        
            <svg  width="20" class="previos" id='previos' height="20" fill='none' viewBox="0 0 32 32">
            <path  id='previos' d="M12.586 27.414l-10-10c-0.781-0.781-0.781-2.047 0-2.828l10-10c0.781-0.781 2.047-0.781 2.828 0s0.781 2.047 0 2.828l-6.586 6.586h19.172c1.105 0 2 0.895 2 2s-0.895 2-2 2h-19.172l6.586 6.586c0.39 0.39 0.586 0.902 0.586 1.414s-0.195 1.024-0.586 1.414c-0.781 0.781-2.047 0.781-2.828 0z"></path>
            </svg>
        
        <button class="pgn-btn first-number" type="button">1</button>
        <span class="pgn-dots">...</span>
        <button class="pgn-btn" type="button">${currentPage - 2}</button>
        <button class="pgn-btn" type="button">${currentPage - 1}</button>
        <button class="pgn-current pgn-btn" type="button" >${currentPage}</button>
        <button class="pgn-btn" type="button">${currentPage + 1}</button>
        <button class="pgn-btn" type="button">${currentPage + 2}</button>
        <span class="pgn-dots">...</span>
        <button class="pgn-btn last-number" type="button">${totalPages}</button>
        
            <svg  id='next' class="next"  width="20" height="20" fill='none' viewBox="0 0 32 32">
            <path   id='next' d="M19.414 27.414l10-10c0.781-0.781 0.781-2.047 0-2.828l-10-10c-0.781-0.781-2.047-0.781-2.828 0s-0.781 2.047 0 2.828l6.586 6.586h-19.172c-1.105 0-2 0.895-2 2s0.895 2 2 2h19.172l-6.586 6.586c-0.39 0.39-0.586 0.902-0.586 1.414s0.195 1.024 0.586 1.414c0.781 0.781 2.047 0.781 2.828 0z"></path>
            </svg>
        `;
  }
  if (currentPage === 97) {
    paginationMarkup = `
        
            <svg  width="20" class="previos" id='previos' height="20" fill='none' viewBox="0 0 32 32">
            <path  id='previos' d="M12.586 27.414l-10-10c-0.781-0.781-0.781-2.047 0-2.828l10-10c0.781-0.781 2.047-0.781 2.828 0s0.781 2.047 0 2.828l-6.586 6.586h19.172c1.105 0 2 0.895 2 2s-0.895 2-2 2h-19.172l6.586 6.586c0.39 0.39 0.586 0.902 0.586 1.414s-0.195 1.024-0.586 1.414c-0.781 0.781-2.047 0.781-2.828 0z"></path>
            </svg>
        
        <button class="pgn-btn first-number" type="button">1</button>
        <span class="pgn-dots">...</span>
        <button class="pgn-btn" type="button">${currentPage - 2}</button>
        <button class="pgn-btn" type="button">${currentPage - 1}</button>
        <button class="pgn-current pgn-btn" type="button" >${currentPage}</button>
        <button class="pgn-btn" type="button">${currentPage + 1}</button>
        <button class="pgn-btn" type="button">${totalPages}</button>
        
            <svg  id='next' class="next"  width="20" height="20" fill='none' viewBox="0 0 32 32">
            <path  id='next' d="M19.414 27.414l10-10c0.781-0.781 0.781-2.047 0-2.828l-10-10c-0.781-0.781-2.047-0.781-2.828 0s-0.781 2.047 0 2.828l6.586 6.586h-19.172c-1.105 0-2 0.895-2 2s0.895 2 2 2h19.172l-6.586 6.586c-0.39 0.39-0.586 0.902-0.586 1.414s0.195 1.024 0.586 1.414c0.781 0.781 2.047 0.781 2.828 0z"></path>
            </svg>
        `;
  }
  if (currentPage === 98) {
    paginationMarkup = `
        
            <svg  width="20" class="previos" id='previos' height="20" fill='none' viewBox="0 0 32 32">
            <path  id='previos' d="M12.586 27.414l-10-10c-0.781-0.781-0.781-2.047 0-2.828l10-10c0.781-0.781 2.047-0.781 2.828 0s0.781 2.047 0 2.828l-6.586 6.586h19.172c1.105 0 2 0.895 2 2s-0.895 2-2 2h-19.172l6.586 6.586c0.39 0.39 0.586 0.902 0.586 1.414s-0.195 1.024-0.586 1.414c-0.781 0.781-2.047 0.781-2.828 0z"></path>
            </svg>
        
        <button class="pgn-btn first-number" type="button">1</button>
        <span class="pgn-dots">...</span>
        <button class="pgn-btn pgn-mobbile" type="button">95</button>
        <button class="pgn-btn pgn-mobbile" type="button">96</button>
        <button class="pgn-btn" type="button">97</button>
        <button class="pgn-current pgn-btn" type="button" >${currentPage}</button>
        <button class="pgn-btn" type="button">${totalPages}</button>
       
            <svg  id='next'  class="next" width="20" height="20" fill='none' viewBox="0 0 32 32">
            <path   id='next' d="M19.414 27.414l10-10c0.781-0.781 0.781-2.047 0-2.828l-10-10c-0.781-0.781-2.047-0.781-2.828 0s-0.781 2.047 0 2.828l6.586 6.586h-19.172c-1.105 0-2 0.895-2 2s0.895 2 2 2h19.172l-6.586 6.586c-0.39 0.39-0.586 0.902-0.586 1.414s0.195 1.024 0.586 1.414c0.781 0.781 2.047 0.781 2.828 0z"></path>
            </svg>
        `;
  }
  if (currentPage === 99) {
    paginationMarkup = ` 
        
            <svg  width="20" class="previos" height="20" fill='none' viewBox="0 0 32 32">
            <path  id='previos' d="M12.586 27.414l-10-10c-0.781-0.781-0.781-2.047 0-2.828l10-10c0.781-0.781 2.047-0.781 2.828 0s0.781 2.047 0 2.828l-6.586 6.586h19.172c1.105 0 2 0.895 2 2s-0.895 2-2 2h-19.172l6.586 6.586c0.39 0.39 0.586 0.902 0.586 1.414s-0.195 1.024-0.586 1.414c-0.781 0.781-2.047 0.781-2.828 0z"></path>
            </svg>
       
        <button class="pgn-btn first-number" type="button">1</button>
        <span class="pgn-dots">...</span>
        <button class="pgn-btn pgn-mobbile" type="button">95</button>
        <button class="pgn-btn" type="button">96</button>
        <button class="pgn-btn" type="button">97</button>
        <button class="pgn-btn" type="button">98</button>
        <button class="pgn-current pgn-btn" type="button" >${currentPage}</button>`;
  }
  return paginationMarkup;
}
