var playlist = new Object({ artist: 'song'})

function updatePlaylist (playlist, artist, song) {
    playlist[artist] = song

    return playlist
}

function removeFromPlaylist(object, artist) {
    delete playlist.artist
    return playlist
}
