const api = function () {

//Only api specific functions
const baseURL = "https://thinkful-list-api.herokuapp.com/andrewtyl/bookmarks";

//get
const getServerBookmarks = function () {
    return fetch(baseURL).json
};

//post
postBookmarkToServer = function (title, url, desc, rating) {
    return fetch(baseURL, {
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
    return fetch(`${baseURL}/${id}`, {
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
    return fetch(`${baseURL}/${id}`, {
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