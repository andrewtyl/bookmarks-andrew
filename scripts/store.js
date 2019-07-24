//Use to store all global variables, and global functions that don't deal with API //// CANNOT USE API METHODS
const store = function () {


let localBookmarks = [
        {
            title: "abc", desc: "def", url: "ghi", rating: 5, compact: true
        },
        {
            title: "zyx", desc: "wvu", url: "tsr", rating: 3, compact: false
        }
    ]

isError = false;
errorMessage = null;

const renderDefaultPage = function() {
    bookmarks = [];
    api.getServerBookmarks;
    //put all server bookmarks into Localbookmarks
    //render html default page
}

return {
    localBookmarks,
    isError,
    errorMessage,
    renderDefaultPage
    
}
}