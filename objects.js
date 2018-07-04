var playlist = {
  Lucas: "Funeral"
}

function updatePlaylist(playlist, artistName, songTitle){
  playlist[artistName] = songTitle;
}

function removeFromPlaylist(playlist, artistname){
delete  playlist[artistname];
}