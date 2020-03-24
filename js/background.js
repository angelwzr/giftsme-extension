
chrome.browserAction.onClicked.addListener(function(tab) { 
    chrome.tabs.query({currentWindow: true, active: true}, function(tabs){
        var currentUrl = tabs[0].url;
        var newUrl =  "http://gogifts.me/?url=" + currentUrl
        chrome.tabs.create({url:newUrl});
    });
});