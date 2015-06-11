/**
 * Created by kaflan on 06.06.15.
 */
window.addEventListener('load', function load() {
  'use strict';
  var body = document.querySelector('body');
  var head = document.querySelector('head');
  var input = document.createElement('input');
  var button = document.createElement('button');
  var div = document.createElement('div');
  var script;
  var queryDiv;
  var queryInput;
  var queryButton;
  var title;
  var queryScriptAll;
  var url;
  body.appendChild(input);
  body.appendChild(button);
  body.appendChild(div);
  queryDiv = document.querySelector('div');
  queryInput = document.querySelector('input');
  queryButton = document.querySelector('button');
  window.showResult = function Glob(data) {
    queryDiv.innerHTML = data.parse.text['*'];
  };
  // function
  function sendRequest() {
    // title
    title = queryInput.value;
    // create script
    script = document.createElement('script');
    head.appendChild(script);
    queryScriptAll = document.querySelectorAll('script');
    url = 'http://en.wikipedia.org/w/api.php?action=parse&page=' + title + '&prop=text&section=0&format=json&callback=showResult';
    queryScriptAll[1].src = url;
    if (queryScriptAll[1].parentNode) {
      queryScriptAll[1].parentNode.removeChild(queryScriptAll[1]);
    }
  }

  // any
  queryDiv.id = 'content';
  queryButton.innerHTML = 'Go';
  // listener
  queryInput.addEventListener('keyup', function inputFun(e) {
    if (e.keyCode !== 13) return;
    sendRequest();
  });
  queryButton.addEventListener('click', sendRequest);
});