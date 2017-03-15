var playlist = {
  'Moby': 'When its cold',
  'londonGrammar': 'Hey Now'
}

function updatePlaylist(playlist, artist, song) {

  playlist[artist] = song

  return playlist
}
               
function removeFromPlaylist(playlist, artist) {
  delete playlist[artist]

  return playlist
}
