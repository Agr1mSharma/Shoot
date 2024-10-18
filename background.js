let playerWindow = null;

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "openPlayer") {
    if (playerWindow) {
      chrome.windows.update(playerWindow.id, { focused: true });
    } else {
      chrome.windows.create({
        url: 'player.html',
        type: 'popup',
        width: 300,    
        height: 500,   
        top: 150,      
        left: 900      
      }, (window) => {
        playerWindow = window;
      });
    }
  }
});