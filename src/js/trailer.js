import * as basicLightbox from 'basiclightbox';
import { getMovieTrailerByID } from './axios';
import { refs } from './DOM';

refs.filmGalleryHomeEl.addEventListener('click', createMovieIframe);

function createMovieIframe(ev) {
  if (ev.target.parentNode.dataset.id) {
    const movieId = ev.target.parentNode.dataset.id;
    console.log(movieId);
    getMovieTrailerByID(movieId)
      .then(data => {
        console.log();
        const id = data.results[1].key;
        console.log(id);
        const instance = basicLightbox.create(
          `<iframe width="560" height="315" src="https://www.youtube.com/embed/${id}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`,
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
        const instance = basicLightbox.create(
          `
    <iframe width="560" height="315" src='http://www.youtube.com/embed/zwBpUdZ0lrQ' title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      `,
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
      });
  } else {
    return;
  }
}
