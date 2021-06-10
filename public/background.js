// // Called when the user clicks on the browser action
chrome.action.onClicked.addListener(function (tab) {
   console.log('click');
   chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
     var activeTab = tabs[0];
     chrome.tabs.sendMessage(activeTab.id, {
       message: 'clicked_browser_action',
     });
   });
 });
 