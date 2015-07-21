//var bkg = chrome.extension.getBackgroundPage();
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  //bkg.console.log(sender.tab ? "from a content script:" + sender.tab.url : "from the extension");

  if (request == "show_icon")
    chrome.pageAction.show(sender.tab.id);
  if (request == "hide_icon")
    chrome.pageAction.hide(sender.tab.id);
});
