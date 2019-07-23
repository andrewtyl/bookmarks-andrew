const api = (function() {
    const baseURL = "https://thinkful-list-api.herokuapp.com/andrewtyl/bookmarks";
    const getBookmarks = () => {
        return fetch(`${baseURL}`).then(res => {
            if (!res.ok) {
                let error = "There was an issue grabbing your bookmarks. Please refresh the page and try again.";
                store.errorMessage = error;
                store.showError = true;
                }
            else {
                return res.json();
            }
        })
    }

    return {
        getBookmarks
    };
})()