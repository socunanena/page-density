'use strict';

const querySelectorElement = document.getElementById('query-selector');

chrome.storage.sync.get('querySelector', ({ querySelector }) => {
  querySelectorElement.value = querySelector || '';
});

querySelectorElement.onblur = (event) => {
  chrome.storage.sync.set({ querySelector: event.srcElement.value });
};
