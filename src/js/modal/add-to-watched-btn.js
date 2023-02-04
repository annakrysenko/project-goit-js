import { refs } from '../DOM';

export function addToWatched(filmId) {
  if (localStorage.getItem('add-to-watch')) {
    // console.log(
    //   'something in local ===>>',
    //   localStorage.getItem('add-to-watch')
    // );
    // const getOBjForQueue = JSON.parse(localStorage.getItem('add-to-watch'));
    // console.log('розпирсили з локалу', getOBjForQueue);
    // const newArr = [...getOBjForQueue];
    // newArr.push(filmId);
    // console.log(newArr);
    // refs.modalEl.removeEventListener('click', addToWatched);
  }
  if (!localStorage.getItem('add-to-watch')) {
    // console.log('nothing in local');
    // const newFilm = [];
    // console.log('create new arr', filmId);
    // newFilm.push(filmId);
    // console.log('push in new arr');
    // console.log('это летит в локал ===>', JSON.stringify(newFilm));
    // localStorage.setItem('add-to-watch', JSON.stringify(newFilm));
    // refs.modalEl.removeEventListener('click', addToWatched);
  }
}
