'use strict';

const densityElement = document.getElementById('density');

chrome.runtime.onMessage.addListener(({ density }) => {
  chrome.storage.sync.get('densityThreshold', ({ densityThreshold }) => {
    densityElement.classList.add(density < densityThreshold ? 'ok' : 'ko');
    densityElement.innerHTML = `${density}%`;
  });
});

chrome.tabs.getCurrent(tabId => chrome.tabs.executeScript(tabId, { file: 'scripts/calculateDensity.js' }));
