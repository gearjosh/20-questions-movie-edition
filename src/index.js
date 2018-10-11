import './scss/styles.scss';
import Movie from './movie.js';
import $ from 'jquery';
import movieList from './movie-list.csv';
import { processData } from './process-data.js';
import { readCSV } from './read-csv.js'

$(document).ready(function() {

  readCSV(movieList, processData);

});
