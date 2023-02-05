import { getMovieTrailerByID } from './axios';
import { refs } from './DOM';

refs.modalEl.addEventListener('click', createMovieIframe);
async function createMovieIframe(e) {
  if (e.target.className !== 'trailers') {
    return;
  }
  refs.trailerBackdrop.classList.remove('is-hidden');
  const movieId = e.target.dataset.id;
  try {
    const resp = await getMovieTrailerByID(movieId);
    const { results } = resp;
    const movie = [...results];
    const id = movie[0].key;
    const murkupTrailer = `
    <iframe class='trailer-iframe' width="auto" height="auto" src='https://www.youtube.com/embed/${id}' title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
     `;
    refs.boxIframe.innerHTML = murkupTrailer;
  } catch (er) {
    const error = `
    <iframe class='trailer-iframe' width="auto" height="auto" src='https://www.youtube.com/embed/zwBpUdZ0lrQ' title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      `;
    refs.boxIframe.innerHTML = error;
    closeBackdrop();
  }
}
if (refs.trailerBackdrop) {
  refs.trailerBtnClose.addEventListener('click', closeBackdrop);
}

function closeBackdrop() {
  refs.trailerBackdrop.classList.add('is-hidden');
  refs.boxIframe.innerHTML = '';
}
window.addEventListener('keydown', closeMovieTrailer);
function closeMovieTrailer(e) {
  if (e.key === 'Escape') {
    refs.trailerBackdrop.classList.add('is-hidden');
    refs.boxIframe.innerHTML = '';
  }
}
if (refs.trailerBackdrop){refs.trailerBackdrop.addEventListener('click', closeBackdropOnClick);}

function closeBackdropOnClick(e) {
  if (e.target.className !== 'trailer-backdrop') {
    return
  }
  refs.trailerBackdrop.classList.add('is-hidden');
  refs.boxIframe.innerHTML = '';
}
