var ws_protocol = location.hostname == 'localhost' ? 'ws://' : 'wss://';
var ws = new WebSocket(ws_protocol + location.host, ['rbkit']);
//var port;

ws.onclose = function(event) {
  console.warn("Disconnected from Rbkit server." + event.reason);
  chrome.runtime.sendMessage("hide_icon");
}
ws.onopen = function(x) {
  console.log("Connected to Rbkit server!");
  chrome.runtime.sendMessage("show_icon");
}

//var createExtensionPort = function() {
  //port = chrome.runtime.connect({name: "websocket_port"});
  //port.postMessage("");
  //port.onMessage.addListener(function(msg) {
  //});
//}
