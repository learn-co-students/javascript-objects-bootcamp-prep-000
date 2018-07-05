var playlist = {Sinatra: ["Always","Summer Wind"],
};

function updatePlaylist(playlist, artist, tracktitle){
  playlist[artist] = tracktitle
  return playlist
}
function removeFromPlaylist(playlist,artist){
  delete playlist[artist]
  return playlist
}
