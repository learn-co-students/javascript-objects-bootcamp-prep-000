var playlist = new Object();
playlist = {'artist' : 'song' }

function updatePlaylist(playlist, artistName, songTitle) {
    return Object.assign({}, playlist, { [artistName]: songTitle })
}

function removeFromPlaylist(playlist, artistName) {
    delete playlist[artistName];
    return playlist;
}
