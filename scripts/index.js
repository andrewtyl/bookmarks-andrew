"use strict";

$(document).ready(function() {
        api.getBookmarks()
        .then(received => {
            console.log(received);
            received.forEach(receivedI => store.addBookmark(receivedI));
            bookmarks.render();
        })
        .catch(err => {
            console.log(`catch ${err}`);
            store.errorMessage = err;
            store.showError = true;
        })
})