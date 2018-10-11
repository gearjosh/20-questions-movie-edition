import './scss/styles.scss';
import Movie from './movie.js';
import $ from 'jquery';
import movieList from './movie-list.csv';
import {processData} from './process-data.js';

$(document).ready(function() {

  let promise = new Promise(function(resolve, reject) {
    let request = new XMLHttpRequest();
    let url = movieList;
    request.onload = function() {
      if (this.status === 200) {
        resolve(request.response);
      } else {
        reject(Error(request.statusText));
      }
    };
    request.open("GET", url, true);
    request.send();
  });

  promise.then(function(response) {
    let body = processData(response);
    console.log(body);
  }, function(error){
    console.log(error);
  });

});
