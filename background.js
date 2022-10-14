let toggle = false;

const canvas = new OffscreenCanvas(16, 16);
const contextOn = canvas.getContext('2d');
contextOn.clearRect(0, 0, 16, 16);
contextOn.fillStyle = '#00FF00'; // Green
contextOn.fillRect(0, 0, 16, 16);
const imageDataOn = contextOn.getImageData(0, 0, 16, 16);

const contextOff = canvas.getContext('2d');
contextOff.clearRect(0, 0, 16, 16);
contextOff.fillStyle = '#cb1900'; // Red
contextOff.fillRect(0, 0, 16, 16);
const imageDataOff = contextOff.getImageData(0, 0, 16, 16);

chrome.action.setBadgeText({ text: 'off' });
chrome.action.setBadgeBackgroundColor(
  { color: '#e91e63' }, // Red
  () => {
    /* ... */
  }
);

chrome.action.onClicked.addListener((tab) => {
  toggle = !toggle;
  if (toggle) {
    // chrome.action.setIcon(
    //   {
    //     imageData: imageDataOn,
    //     tabId: tab.id,
    //   },
    //   () => {
    //     /* ... */
    //   }
    // );
    chrome.action.setBadgeText({ text: 'on' });
    chrome.action.setBadgeBackgroundColor(
      { color: '#4caf50' }, // Green
      () => {
        /* ... */
      }
    );
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      files: ['content.js'],
    });
  } else {
    // chrome.action.setIcon(
    //   {
    //     imageData: imageDataOff,
    //     tabId: tab.id,
    //   },
    //   () => {
    //     /* ... */
    //   }
    // );
    chrome.action.setBadgeText({ text: 'off' });
    chrome.action.setBadgeBackgroundColor(
      { color: '#e91e63' }, // Red
      () => {
        /* ... */
      }
    );
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      files: [''],
    });
  }
});
