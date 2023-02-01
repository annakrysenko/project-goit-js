import axios from "axios";

const KEY_ANNA_K = '2a9019ab3cb7c560ad73000751e89f97'; // Ключ тім ліда
const BASE_URL = 'https://api.themoviedb.org/3';

// Пошук по назві
export async function getAxiosSearchFilms(query, page = 1) {
    try {
        const response = await axios.get(`${BASE_URL}/search/movie?api_key=${KEY_ANNA_K}&page=${page}&language=en-US&query=${query}`)
        const data = response.data
        return data
    }
    catch (err){
        console.log(err)
    }
}

//---------ДОПИСУЄМО СВОЇ КЛЮЧІ І ФУНКЦІЇ СЮДИ!---------//





// Популярні

// Детальна інфа

// Чи є на ютубі трейлер

