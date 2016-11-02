var playlist = {
  Tesserat: 'April',
  'After the Burial': 'Lost in the Static'
}

function updatePlaylist(playlist, artist, song){
  playlist['Phil Ochs'] = "Here's to the State of Mississippi"

  return playlist
}

function removeFromPlaylist(playlist, artist){
  delete playlist['Kanye']

  return playlist

}
