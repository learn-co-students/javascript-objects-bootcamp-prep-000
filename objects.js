var playlist = {
    phante: "Miranda",
    tamyMusic: "Ndozvandiri",
    takura: "Ndoda kutaura newe",
    simbaTagz: "Go Ahead"
};

function updatePlaylist(playlist, artistName, song) {
    playlist[artistName] = song;

    return playlist;
}

function removeFromPlaylist(playlist, artistName) {
    delete playlist[artistName];

    return playlist;
}
