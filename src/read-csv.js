export function readCSV {
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
    return body;
  }, function(error){
    console.log(error);
  });
}
