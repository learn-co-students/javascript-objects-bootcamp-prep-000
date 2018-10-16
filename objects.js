var playlist= {}
playlist.MinnieRiperton = 'Feelin That Your Feelin Good'
function updatePlaylist (playlist, artist, song) { 
  playlist[artist]= song 
  return playlist
  }
  function removeFromPlaylist (playlist, artist) {
  delete playlist[artist]
  return playlist
  }