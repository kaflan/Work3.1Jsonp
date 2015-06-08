/**
 * Created by kaflan on 06.06.15.
 */
window.addEventListener('load', function () {
  var body = document.querySelector('body');
  var head = document.querySelector('head');
  //  create el
  var input = document.createElement('input');
  var button = document.createElement('button');
  var div = document.createElement('div');
  var script = document.createElement('script');
  // append child
  body.appendChild(input);
  body.appendChild(button);
  body.appendChild(div);
  //query selectors
  var queryDiv = document.querySelector('div');
  var queryInput = document.querySelector('input');
  var queryButton = document.querySelector('button');
  //global function
  //window or this
  window.showResult = function (data) {
    console.log(data);
    queryDiv.innerHTML = data.parse.text['*'];
  };
  //function
  var sendRequest = function () {
    //title
    var title = queryInput.value;
    //create script
    var script = document.createElement('script');
    head.appendChild(script);
    var queryScriptAll = document.querySelectorAll('script');
    //
    var url = 'http://en.wikipedia.org/w/api.php?action=parse&page=' + title + '&prop=text&section=0&format=json&callback=showResult';
    queryScriptAll[1].src = url;
    if(queryScriptAll[1].parentNode){
      queryScriptAll[1].parentNode.removeChild(queryScriptAll[1]);
    }
  };
  // any
  queryDiv.id = 'content';
  queryButton.innerHTML = 'Go';
  // listener
  queryInput.addEventListener('keyup', function(e){
    if(e.keyCode !== 13) return;
    sendRequest();
  });
  queryButton.addEventListener('click', sendRequest);
});