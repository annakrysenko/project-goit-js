import { getMovieTrailerByID } from './axios';
import { refs } from './DOM';

refs.modalEl.addEventListener('click', createMovieIframe);
// function createMovieIframe(e) {
//   if (e.target.className === 'trailers') {
//     const movieId = e.target.dataset.id;
//     console.log(movieId);
//   } else {
//     return;
//   }
// }
//
window.addEventListener('keydown', closeMovieTrailer);

async function createMovieIframe(e) {
  if (e.target.className !== 'trailers') {
    return;
  }
  refs.trailerBackdrop.classList.remove('is-hidden');
  console.dir(e.target)
  const movieId = e.target.dataset.id;
  try {
    const resp = await getMovieTrailerByID(movieId);
    console.log(resp);
    const { results } = resp;
    const movie = [...results];
    const id = movie[0].key;
    const murkupTrailer = `
    <iframe width="560" height="315" src='https://www.youtube.com/embed/${id}' title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
     `;
    refs.trailerBox.insertAdjacentHTML('afterbegin', murkupTrailer);
  } catch (er) {
    const error = `
    <iframe width="560" height="315" src='https://www.youtube.com/embed/zwBpUdZ0lrQ' title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      `;
    refs.trailerBox.insertAdjacentHTML('afterbegin', error);
    closeBackdrop();
  }
}
if (refs.trailerBackdrop) {
  refs.trailerBtnClose.addEventListener('click', closeBackdrop);
}

function closeBackdrop() {
  refs.trailerBackdrop.classList.add('is-hidden');
}
function closeMovieTrailer(e) {
  if (e.key === 'Escape') {
    refs.trailerBackdrop.classList.add('is-hidden');
  }
}
console.log('hi');
