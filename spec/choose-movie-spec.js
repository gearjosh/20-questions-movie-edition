import movieList from './../src/movie-list.csv';
import { processData } from './../src/process-data.js';
import { chooseMovie } from './../src/choose-movie.js'
import { readCSV } from './../src/read-csv.js'

describe('chooseMovie', function() {

  const body = readCSV(movieList);
  // console.log(body);
  // beforeEach(() => {

  it('should return raiders of the lost ark from movie-list.csv', function() {
    setTimeout(() => {
      const actual = chooseMovie(39, body);
      const control = "Raiders of the Lost Ark";
      expect(actual).toEqual(control);
    }, 50);
  });

});

  // it should return a random movie object from our OMDB API

  // it should recognize the year keyword in user input

  // if user asks about year output is a string of four numbers
