var playlist = {deadmau5: 'strobe'}

function updatePlaylist(playlist, artist, title){
return playlist.artist=title
}

function removeFromPlaylist(playlist, artist){
  delete playlist.artist
  return playlist
}