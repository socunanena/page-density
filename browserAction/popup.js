'use strict';

chrome.runtime.onMessage.addListener(({ density }) => {
  const densityElement = document.getElementById('density');
  densityElement.classList.add(density < 30 ? 'ok' : 'ko');
  densityElement.innerHTML = `${density}%`;
});

chrome.tabs.getCurrent(tabId => chrome.tabs.executeScript(tabId, { file: 'scripts/calculateDensity.js' }));
