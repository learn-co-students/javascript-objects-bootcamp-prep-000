var playlist = {
  'Philip Glass' : 'The Hours',
  'Cocteau Twins' : 'Heaven or Las Vegas',
}

function updatePlaylist(playlist, artist, song) {
 
  playlist[artist] = song

  return playlist
}

function removeFromPlaylist(playlist, artist) {
  delete playlist[artist]

  return playlist
}





