import { getMovieTrailerByID } from './axios';
import { refs } from './DOM';

refs.modalEl.addEventListener('click', createMovieIframe);
async function createMovieIframe(e) {
  if (
    e.target.className !== 'trailers' &&
    e.target.className !== 'icon-youtube' &&
    e.target.className !== 'trailers-text'
  ) {
    return;
  }
  refs.trailerBackdrop.classList.remove('is-hidden');
  refs.trailerBtnClose.addEventListener('click', closeBackdrop);
  window.addEventListener('keydown', closeMovieTrailer);
  refs.trailerBackdrop.addEventListener('click', closeBackdropOnClick);
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
  }
}

function closeBackdrop() {
  refs.trailerBackdrop.classList.add('is-hidden');
  refs.boxIframe.innerHTML = '';
  refs.trailerBtnClose.removeEventListener('click', closeBackdrop);
  window.removeEventListener('keydown', closeMovieTrailer);
  refs.trailerBackdrop.removeEventListener('click', closeBackdropOnClick);
}
function closeMovieTrailer(e) {
  if (e.key === 'Escape') {
    console.log(e.key);
    refs.trailerBackdrop.classList.add('is-hidden');
    refs.boxIframe.innerHTML = '';
    refs.trailerBtnClose.removeEventListener('click', closeBackdrop);
    window.removeEventListener('keydown', closeMovieTrailer);
    refs.trailerBackdrop.removeEventListener('click', closeBackdropOnClick);
  }
}
function closeBackdropOnClick(e) {
  if (e.target.className !== 'trailer-backdrop') {
    return;
  }
  refs.trailerBackdrop.classList.add('is-hidden');
  refs.boxIframe.innerHTML = '';
  refs.trailerBtnClose.removeEventListener('click', closeBackdrop);
  window.removeEventListener('keydown', closeMovieTrailer);
  refs.trailerBackdrop.removeEventListener('click', closeBackdropOnClick);
}
