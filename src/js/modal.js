function modalMurkup(movie) {   
    let genresName = movie.genres.map(ganre => ganre.name).join(', ')
    
   return `
  <img src="${movie.poster_path}" alt="movie-poster" /></a>
  <h2>${movie.original_title}</h2>
  <p>Vote / Votes ${movie.vote_average}/${movie.vote_count}</p>
  <p>Popularity ${movie.popularity}</p>
  <p>Original Title ${movie.original_title} </p>
  <p>Genre ${genresName}</p>
  <h3>About </h3>
  <p>${movie.overview}</p>
  <button type="button">add to Watched</button>
  <button type="button">add to queue</button>
` 
}