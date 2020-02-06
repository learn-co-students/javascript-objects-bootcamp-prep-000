var playlist = {"Blake Shelton": "Austin"}

function updatePlaylist(playlistObj, artist, title){
  playlistObj[artist] = title;
}

function removeFromPlaylist(playlistObj, artist){
  delete playlistObj[artist];
}