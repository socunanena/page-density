'use strict';

function manageInput({ elementName, storageKey, defaultValue }) {
  const element = document.getElementById(elementName);

  chrome.storage.sync.get(storageKey, (storage) => {
    element.value = storage[storageKey] || defaultValue;
  });

  element.onblur = (event) => {
    const element = event.srcElement;
    const value = element.type === 'number' ? element.valueAsNumber : element.value;
    chrome.storage.sync.set({ [storageKey]: value });
  };
}

const inputFields = [
  { elementName: 'query-selector', storageKey: 'querySelector', defaultValue: '' },
  { elementName: 'density-threshold', storageKey: 'densityThreshold', defaultValue: 0 },
];

inputFields.forEach(field => manageInput(field));
