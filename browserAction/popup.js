'use strict';

chrome.runtime.onMessage.addListener(({ density }) => {
  var densityElement = document.getElementById('density');
  densityElement.classList.add(density < 30 ? 'ok' : 'ko');
  densityElement.innerHTML = `${density}%`;
});

chrome.tabs.query({ active: true, currentWindow: true }, ([tab]) => {
  chrome.tabs.executeScript(tab.id, { file: 'scripts/calculateDensity.js' });
});
