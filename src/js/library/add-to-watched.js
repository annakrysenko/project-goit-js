import { refs } from '../DOM';
import { getMovieByID } from '../axios';
import { cardMovieMarkup } from '../create-gallery/cardMovieMarkup';
import { makeGalleryMarkup } from '../create-gallery/make-home-gallery';

const saveMovie = localStorage.getItem('add-to-watch');
const parseMovie = JSON.parse(saveMovie);
console.log(parseMovie);

if (refs.headerLibrary) {
  refs.watchedBtn.addEventListener('click', onClick);
}
let watchedArr = [];
async function onClick() {
  try {
    parseMovie.map(async movie => {
      const data = await getMovieByID(movie);
      watchedArr.push(data);
      console.log(watchedArr);
    });
    console.log(watchedArr);
  } catch {}
}
//   console.log(watchedArr);
//   const watchedMarkup = makeGalleryMarkup(watchedArr);
//   refs.filmGalleryLibraryEl.innerHTML = watchedMarkup;

// розпарсити JSON.parse
// 3) законсолити те шо отприимала
// 4) передати необхідне у мою функцію makeGalleryMarkup (повертає розмітку галереї)
// 5) іннерХТМЛ в мейн-лайбрері
