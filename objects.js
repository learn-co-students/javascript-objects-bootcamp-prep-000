var playlist = { Ed_Sheeran: 'Castle On The Hill' };

function updatePlaylist(playlist, artist, title) {
  playlist[artist] = title
  return playlist
}

function removeFromPlaylist(playlist, artist) {
  delete playlist[artist]
  return playlist
}