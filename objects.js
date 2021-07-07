var playlist = {Maroon5: "what lovers do", 
massari: "number one"
}
function updatePlaylist(playlist, artist, song) {
  playlist[artist] = song
  return playlist
}
function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName] 
  return playlist
}