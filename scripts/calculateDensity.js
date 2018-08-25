'use strict';

var { width, height } = document.querySelector('body').getBoundingClientRect();
var bodyArea = width * height;

chrome.storage.sync.get(['querySelector'], ({ querySelector }) => {
  var elementsArea = Array.from(document.querySelectorAll(querySelector)).reduce((sum, element) => {
    var { width, height } = element.getBoundingClientRect();
    return sum + (width * height);
  }, 0);

  var density = ((elementsArea / bodyArea) * 100).toFixed(2);

  chrome.runtime.sendMessage({ density });
});
