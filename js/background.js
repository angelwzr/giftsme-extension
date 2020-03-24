

chrome.browserAction.onClicked.addListener(function(activeTab)
{
	chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {
		var url = tabs[0].url;
		alert(url)
	});
    var newURL = 'https://google.com/search?q=';
    chrome.tabs.create({ url: newURL });
});