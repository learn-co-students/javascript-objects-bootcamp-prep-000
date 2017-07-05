var playlist = {artist: "title"};

function updatePlaylist(playlist, artist, title) {
  playlist[artist]  = title
  return playlist
}

function removeFromPlaylist(playlist,artist) {
  //delete playlist.artist won't work, use 
  delete playlist[artist]
  return playlist
}
