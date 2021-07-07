var playlist = {lizzo: "Good As Hell"};

function updatePlaylist(playlist, artistName, songTitle) {
playlist[artistName] = songTitle
return playlist
}

function removeFromPlaylist(playlist, artistName) {
delete playlist[artistName];
return playlist
}
