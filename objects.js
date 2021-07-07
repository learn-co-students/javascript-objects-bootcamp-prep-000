var playlist = {artistName: "songTitles"};

function updatePlaylist(playlist, artistName, songTitles) {
 return playlist[artistName]=songTitles
}

function removeFromPlaylist(playlist, artistName){
delete playlist[artistName];
}