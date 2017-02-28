var playlist = new Object( { ["Hikari Utada"]: "Beautiful World"});

function updatePlaylist(object, artistName, songTitle) {
    object[artistName] = songTitle;
    return object;
}

function removeFromPlaylist(object, artistName) {
    delete object[artistName];
    return object;
}
