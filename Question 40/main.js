function makeAlbum(artist, title) {
    var dictionaries = {
        artist: artist.charAt(0).toUpperCase() + artist.slice(1),
        title: title.charAt(0).toUpperCase() + title.slice(1)
    };
    return dictionaries;
}
var album = makeAlbum("Ali", "Alone Rider");
console.log(album);
album = makeAlbum("mohsin", "Roar");
console.log(album);
album = makeAlbum("Hania", "ladyland");
console.log(album);
