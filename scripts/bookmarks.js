"use strict";

const bookmarks = (function() {
    
    
    function render() {
        $('body').html();
        for (let i = 0; store.bookmarks.length > i; i++){
            let ratingElement;
            console.log(`Render has ran ${i + 1} times`);
            if (store.bookmarks[i].rating == 0) {
                ratingElement = `<div class="rated">&#x2606;&#x2606;&#x2606;&#x2606;&#x2606;</div>`;
            }
            else if (store.bookmarks[i].rating == 1) {
                ratingElement = `<div class="rated">&#x2605;&#x2606;&#x2606;&#x2606;&#x2606;</div>`;
            }
            else if (store.bookmarks[i].rating == 2) {
                ratingElement = `<div class="rated">&#x2605;&#x2605;&#x2606;&#x2606;&#x2606;</div>`;
            }
            else if (store.bookmarks[i].rating == 3) {
                ratingElement = `<div class="rated">&#x2605;&#x2605;&#x2605;&#x2606;&#x2606;</div>`;
            }
            else if (store.bookmarks[i].rating == 4) {
                ratingElement = `<div class="rated">&#x2605;&#x2605;&#x2605;&#x2605;&#x2606;</div>`;
            }
            else {
                ratingElement = `<div class="rated">&#x2605;&#x2605;&#x2605;&#x2605;&#x2605;</div>`;
            }
            $('body').append(`<div class="bookmarkItemAll" id="${store.bookmarks[i].id}"><div class="bookmarkItemA"><h3 class="bookmarkTitle">${store.bookmarks[i].title}<h3>
            <button type="button" id="edit-button" class="button">Edit</button>
            <button type="button" id="delete-button" class="button">Delete</button></div>
            <div class="bookmarkItemB">${ratingElement}
            <form>
            <input type="checkbox" id="compact" name="compact" value="compact" checked>Compact View</form>
            </div></div>`
            );
    }}

    return {
        render,
    };
}
)();