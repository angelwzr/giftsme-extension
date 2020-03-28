
function onClicked() {
    chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
        var currentUrl = tabs[0].url;
        var newUrl = "http://gogifts.me/?url=" + currentUrl
        //uncomment for debug purposes
        //alert(newUrl)
        chrome.tabs.create({ url: newUrl });
    });
}

chrome.browserAction.onClicked.addListener(onClicked);

chrome.commands.onCommand.addListener(function (command) {
    if (command == "keyblock") {
        onClicked();
    }
});