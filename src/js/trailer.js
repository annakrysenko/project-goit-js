import * as basicLightbox from 'basiclightbox';

const body = document.querySelector('body');
const btn = document.createElement('button');
btn.textContent = 'Click';
body.append(btn);
btn.addEventListener('click', createMovieIframe);
function createMovieIframe() {
  const ApiKey = '1256f1c895c40ff76f99ba50b7102dca';
  const url = `https://api.themoviedb.org/3/movie/315162/videos?api_key=${ApiKey}&language=en-US`;
  fetch(url)
    .then(response => response.json())
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
