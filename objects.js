var playlist = {artist: 'songTitle'}

function updatePlaylist (playist, artistName, songTitle){
  playlist[artistName] = 'songTitle'
  return playlist
}

function removeFromPlaylist(playlist, artistName){
  delete playlist[artistName]
  return playlist
}