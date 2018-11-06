var playlist = { artistName: "foobar"};

function updatePlaylist(playList, artistName, songTitle) {
    playList[artistName] = songTitle
}

function removeFromPlaylist(playList, artistName) {
    delete playList[artistName];
    return playlist;

}
