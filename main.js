function createMainPanel() {
  chrome.devtools.panels.create(
    'Rbkit', null, 'main_panel.html', function(panel) {
      panel.onShown.addListener(mainPanelShown);
    }
  );
}

function mainPanelShown(mainPanelWindow) {
  if (!mainPanelWindow.wasShown) {
    mainPanelWindow.focus();
    mainPanelWindow.wasShown = true;
  }
}
createMainPanel();
