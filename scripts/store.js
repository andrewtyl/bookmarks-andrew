//Use to store all global variables, and global functions that don't deal with API //// CANNOT USE API METHODS
const store = function () {


let localBookmarks = [];
isError = false;
errorMessage = null;
filterRating = 0;

function newBookmark(title, url, desc, rating) {
    api.postBookmarkToServer(title, url, desc, rating);
}

return {
    localBookmarks,
    isError,
    errorMessage,
    filterRating,
    newBookmark
}
}();