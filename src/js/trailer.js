import basicLightbox from 'basiclightbox';
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

function createMovieIframe(e) {
  if (e.target.className === 'trailers') {
    const movieId = e.target.dataset.id;
    console.log(movieId);
    getMovieTrailerByID(movieId)
      .then(data => {
        console.log();
        const id = data.results[0].key;
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
console.log('hi');
