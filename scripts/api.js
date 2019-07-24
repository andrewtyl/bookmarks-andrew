const api = function () {

//Only api specific functions
const baseURL = "https://thinkful-list-api.herokuapp.com/andrewtyl/bookmarks";

function apiContact(input) {
    let error = null;
    return fetch(input)
        .then(res => {
            if (!res.ok) {
                error = res.status;
            }
            else {return res.json()};
        })
        .then(res => {
            if (error != null) {
                store.errorMessage = res.message;
                store.isError = true;
                return Promise.reject(error);
            }
            else {return res;}
        })
} 

//get
const getServerBookmarks = function () {
    apiContact(`${baseURL}`);
};

//post
postBookmarkToServer = function (title, url, desc, rating) {
    return apiContact(`${baseURL}`, {
        method: 'POST',
        headers: new Headers({
            'Content-Type' : 'application/json'}),
            body: {
                "title" : `"${title}"`,
                "url" : `"${url}"`,
                "desc" : `"${desc}"`,
                "rating" : rating,
            }
        })
};

//patch
updateBookmarkOnServer = function (id, title, url, desc, rating) {
    return apiContact(`${baseURL}/${id}`, {
        method: 'PATCH',
        headers: new Headers({
            'Content-Type' : 'application/json'}),
            body: {
                "title" : `"${title}"`,
                "url" : `"${url}"`,
                "desc" : `"${desc}"`,
                "rating" : rating,
            }
        })
};

//delete
deleteBookmarkFromServer = function (id) {
    return apiContact(`${baseURL}/${id}`, {
        method: 'DELETE',
        headers: new Headers({'Content-Type' : 'application/json'}),
        })
};

return {
    getServerBookmarks,
    postBookmarkToServer,
    updateBookmarkOnServer,
    deleteBookmarkFromServer
    };
}();