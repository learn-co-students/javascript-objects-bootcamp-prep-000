var playlist = {"Beyonce" : "Soldier", "Bette Midler" : "The Rose", "Usher" : "Yeah"};

function updatePlaylist(playlist, artist, song) {
    playlist[artist] = song;

    return playlist;
}

function removeFromPlaylist(playlist, artist) {
    delete playlist[artist];

    return playlist;
}
