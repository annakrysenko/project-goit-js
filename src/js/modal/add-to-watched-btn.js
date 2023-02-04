import { refs } from '../DOM';
export function addToWatched(e, movie) {
  if (e.target.className === 'watched') {
    const getArrayForWatched = JSON.parse(localStorage.getItem('add-to-watch'));
    getArrayForWatched.push(movie);
    localStorage.setItem('add-to-watch', JSON.stringify(getArrayForWatched));
    refs.modalEl.removeEventListener('click', addToWatched);
  }
}
