"use strict";

const store = (function() {
    let bookmarks = [];
    let filter = "none";
    let addNewItem = false;
    let showError = false;
    let errorMessage = null;

    let addBookmark = function(bookmark) {
        this.bookmarks.push(bookmark);
    }

    return {
        bookmarks,
        filter,
        addNewItem,
        showError,
        errorMessage,
        addBookmark
    };
})();