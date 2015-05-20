chrome.extension.onMessage.addListener(function(msg, sender, sendResponse) {
  if (msg.go) {
    // Do some magic jQuery stuff every time the button is pressed.
    // For instance, toggle links:
    $("a").toggle()
  }
});