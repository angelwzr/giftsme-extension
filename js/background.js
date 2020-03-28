
function magic() {
    chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
        var currentUrl = tabs[0].url;
        var newUrl = "http://gogifts.me/?url=" + currentUrl
        //uncomment for debug purposes
        //alert(newUrl)
        chrome.tabs.create({ url: newUrl });
    });
}

chrome.browserAction.onClicked.addListener(magic);

chrome.commands.onCommand.addListener(function (command) {
    if (command == "keyblock") {
        magic();
    }
});

chrome.contextMenus.create({
    id: "wish-add",
    title: chrome.i18n.getMessage("contextItem"),
    contexts: ["all"],
});

chrome.contextMenus.onClicked.addListener(function(info, tab) {
    if (info.menuItemId == "wish-add") {
        magic();
    }
});