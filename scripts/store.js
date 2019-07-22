const store = (function() {

    let bookmarks = [];
    let filter: "none";
    let addNewItem: false;
    let showError: false;
    let errorMessage: null;
    return {
        bookmarks,
        filter,
        addNewItem,
        showError,
        errorMessage
    };
})();