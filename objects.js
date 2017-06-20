var playlist = new Object({ artist: 'song' });

function updatePlaylist(playlist, artist, song) {
    Object.assign(playlist, {[artist]: song});
    return playlist;
}

function removeFromPlaylist(playlist, artist) {
    delete playlist[artist];
    return playlist;
}
