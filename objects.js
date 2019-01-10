var playlist = { 'My Bloody Valentine': "Sometimes" }

function updatePlaylist(playlist, artist, song) {
  playlist['Slowdive'] = 'Alison'
  playlist['Phil Ochs'] = "Here's to the State of Mississippi"
  return(playlist)
}

function removeFromPlaylist(playlist, artist) {
  delete playlist.Slowdive
  return(playlist)
}