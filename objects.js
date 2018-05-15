var playlist = {
  "Bob Dylan": "The times they are a changin",
  "Beach House": "Space song",
}

function updatePlaylist(playlist, artistName, songTitle){
  playlist[artistName] = songTitle;
  return playlist;
}

function removeFromPlaylist(playlist, artistName){
  delete playlist[artistName];
  return playlist;
}