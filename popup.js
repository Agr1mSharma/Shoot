chrome.action.onClicked.addListener(() => {
    chrome.windows.create({
      url: chrome.runtime.getURL("video.html"),
      type: "popup",
      width: 800,
      height: 600,
      left: 0,
      top: 0
    }, (window) => {
      chrome.windows.create({
        url: "chrome://newtab",
        type: "normal",
        left: 800,
        top: 0,
        width: screen.availWidth - 800,
        height: screen.availHeight
      });
    });
  });