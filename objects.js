var playlist = {artistName: 'songTitle'}

function updatePlaylist(playlist, artistName, songTitle){
  playlist[artistName]=songTitle
  return playlist
}

function removeFromPlaylist(artistName, songTitle){
  delete playlist.artistName
  return playlist
}
