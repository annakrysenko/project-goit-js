import * as basicLightbox from 'basiclightbox';
import { getMovieTrailerByID } from './axios';
import { refs } from './DOM';

// const body = document.querySelector('body');
// const btn = document.createElement('button');
// btn.textContent = 'Click';
// body.append(btn);
// btn.addEventListener('click', createMovieIframe);
refs.filmGalleryHomeEl.addEventListener('click', createMovieIframe);
function createMovieIframe(e) {
  console.log(e.target.parentNode.parentNode.dataset.id);
  const movieId = e.target.parentNode.parentNode.dataset.id;
  getMovieTrailerByID(movieId)
    .then(data => {
      const id = data.results[0].key;
      const instance = basicLightbox.create(
        `<iframe width="560" height="315" src="https://www.youtube.com/embed/${id}" frameborder="0"></iframe>`,
        {
          onShow: instance => {
            document.addEventListener('keydown', closeMovieTrailer);
          },
          onClose: instance => {
            document.removeEventListener('keydown', closeMovieTrailer);
          },
        }
      );
      instance.show();
      function closeMovieTrailer(event) {
        if (event.key === 'Escape') {
          instance.close();
        }
      }
    })
    .catch(() => {
      const instance = basicLightbox.create(`
    <iframe width="560" height="315" src='http://www.youtube.com/embed/zwBpUdZ0lrQ' frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      `);

      instance.show();
    });
}
