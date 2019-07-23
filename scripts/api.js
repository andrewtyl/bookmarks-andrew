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

    const addBookmark = (title, url, desc, rating) => {
        let upload = {
            title: title,
            url: url,
            desc: desc,
            rating: rating,
        }
        return fetch(baseURL, {
            method: 'POST',
            mode: 'cors',
            headers: {'Content-Type': 'applcation/json'},
            body: JSON.stringify(upload)
        })
        .then(res => {
            if (!res.ok) {
                let error = "There was an issue adding your bookmark. Please refresh the page and try again.";
                store.errorMessage = error;
                store.showError = true;
            }
            else {
                return res.json();
            }
        })
    }

    const editBookmark = (title, url, desc, rating) => {
        let upload = {
            title: title,
            url: url,
            desc: desc,
            rating: rating,
        }
        return fetch(baseURL, {
            method: 'POST',
            mode: 'cors',
            headers: {'Content-Type': 'applcation/json'},
            body: JSON.stringify(upload)
        })
        .then(res => {
            if (!res.ok) {
                let error = "There was an issue adding your bookmark. Please refresh the page and try again.";
                store.errorMessage = error;
                store.showError = true;
            }
            else {
                return res.json();
            }
        })
    }

    }

    const deleteBookmark = () => {

    }

    return {
        getBookmarks,
        addBookmark,
        editBookmark,
        deleteBookmark
    };
})()