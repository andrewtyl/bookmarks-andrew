"use strict";

const bookmarks = (function() {
    
    
    function render() {
        $('body').html();
        $('body').append(`<div class="bookmarkItem" id="${store.bookmarks[0].id}"><p>Bookmark Title: ${store.bookmarks[0].title}<break></break>Bookmark URL: ${store.bookmarks[0].url}<break></break></p></div>`);
    }

    return {
        render,
    };
}
)();