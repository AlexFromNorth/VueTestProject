const requestURL = "json/data.json";
const request = new XMLHttpRequest();
request.open("GET", requestURL);
request.responseType = "json";
request.send();

request.onload = function () {
  let arr = request.response;

  var app = new Vue({
    el: "#app",
    data: {
      items: arr,
    },
  });
};
