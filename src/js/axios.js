import axios from 'axios';

const KEY_ANNA_K = '2a9019ab3cb7c560ad73000751e89f97'; // Ключ тім ліда
const BASE_URL = 'https://api.themoviedb.org/3';

// Пошук по назві
export async function getAxiosSearchFilms(query, page = 1) {
  try {
    const response = await axios.get(
      `${BASE_URL}/search/movie?api_key=${KEY_ANNA_K}&page=${page}&language=en-US&query=${query}`
    );
    const data = response.data;
    return data;
  } catch (err) {
    console.log(err);
  }

}

//---------ДОПИСУЄМО СВОЇ КЛЮЧІ І ФУНКЦІЇ СЮДИ!---------//

// Популярні

export async function getAxiosPopularFilms(page = 1) {
    try {
        const response = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=2a9019ab3cb7c560ad73000751e89f97&page=${page}&language=en-US`)
      const data = response.data
        return data
    }
    catch (err) {
        console.log(err)
    }
}

// Детальна інфа
export async function getMovieByID(movieId) {
    try {
        const response = await axios.get(`${BASE_URL}/movie/${movieId}?api_key=${KEY_ANNA_K}&language=en-US`)
       return response.data
    }
    catch (err) {
        console.log('there is no such ID')
    }
}


// Чи є на ютубі трейлер
