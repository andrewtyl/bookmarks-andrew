"use strict";

const bookmarks = (function() {
    
    
    function render() {
        $('body').html();
        for (let i = 0; store.bookmarks.length >= i; i++){
        $('body').append(`<div class="bookmarkItem" id="${store.bookmarks[i].id}    "><h3 class="bookmarkTitle">${store.bookmarks[i].title}<h3>
            <button type="button" id="edit-button" class="button">Edit</button>
            <button type="button" id="delete-button" class="button">Delete</button>
            <form>
            <input type="checkbox" id="compact" name="compact" value="compact" checked>Compact View</form>
            </div>`
            );
    }}

    return {
        render,
    };
}
)();