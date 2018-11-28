// listen for form submit
document.getElementById('myForm').addEventListener('submit', saveBookmark);

// save bookmark
function saveBookmark (e) {
    var siteName = document.getElementById('siteName').value;
    var siteURL = document.getElementById('siteURL').value;

    // create bookmark object
    var bookmark = {
        name: siteName,
        url: siteURL
    }
    console.log(bookmark);

    if (localStorage.getItem('bookmarks') === null) {
        var bookmarks = [];

        bookmarks.push(bookmark);

        localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
    } else {
        // get bookmarks from local storage / turns string into JSON
        var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));

        // add bookmarks to array
        bookmarks.push(bookmark);

        localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
    }

    // Prevents form submission
    e.preventDefault();
}

// fetch bookmarks
function fetchBookmarks () {
    var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
}