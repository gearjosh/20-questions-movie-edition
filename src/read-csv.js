export function readCSV(file, processFunction) {
  let promise = new Promise(function(resolve, reject) {
    let request = new XMLHttpRequest();
    let url = file;
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
    let body = processFunction(response);
    return body;
  }, function(error){
    alert(error);
  });
}
