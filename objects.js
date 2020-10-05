var playlist = { beethoven: "Moonlight Sonata" };
// Limitation - one piece per artist. 

function updatePlaylist (playlist, nameOfArtist, titleOfSong) {
    playlist[nameOfArtist] = titleOfSong;
    return;
}

function removeFromPlaylist (playlist, artistName) {
    delete playlist[artistName];
    return;
}
