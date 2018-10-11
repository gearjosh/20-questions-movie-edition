export function chooseMovie(randomNumber, movieArray) {
  const foundMovie = movieArray.filter((movie) => {
    return movie[0] === `"${randomNumber}`;
  });
  const foundMovieTitle = foundMovie.filter((value) => {
    return value[1];
  });
  console.log(`movie title is ${foundMovieTitle}`);
  return foundMovieTitle;
}
