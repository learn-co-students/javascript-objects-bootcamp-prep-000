var playlist = {artist : 'Widespread Panic', song : 'Driving Song'};
function updatePlaylist(playlist, artist, song) {
  playlist['Phil Ochs'] = 'Althea'
  return playlist
}

function removeFromPlaylist(playlist, artist) {
  delete playlist[artist]
  return playlist
}



 
