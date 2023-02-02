import { getAxiosSearchFilms } from './axios';
import { refs } from './DOM';
import { genresAll } from './genres';

export async function getFilmsFromInput(e) {
  e.preventDefault();
  const query = e.target.elements.input.value;

  if (query.trim() === '') {
    makeErrorMassage();
    return;
  }
  const searchFilms = await getAxiosSearchFilms(query);

  if (searchFilms.total_results === 0) {
    makeErrorMassage();
    return;
  }
  refs.inputAnswerParEl.innerHTML = '';

  console.log(searchFilms.results);

  function makeGalleryInput() {
    searchFilms.results.map(film => {
      const { id, poster_path, title, genres, release_date } = film;

      // console.log(typeOf(release_date))
      //   console.log(newGenres);
      return id, poster_path, title, genres, release_date.slice(0, 4);
    });
  }

  const galleryData = makeGalleryInput();
}

// refs.filmGalleryHomeEl.innerHTML = markupGallery

function makeErrorMassage() {
  refs.inputAnswerParEl.innerHTML =
    'Search result not successful. Enter the correct movie name and';
}

// потім
// localStorage.setItem('query', q)
