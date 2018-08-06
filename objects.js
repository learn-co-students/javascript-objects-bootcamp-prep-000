var playlist = new Object({Drake: 'In My Feelings'})

function updatePlaylist(playlist, artistName, songTitle) {
  playlist['artistName'] = songTitle
 
  return playlist
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist.artistName
 
  return playlist
}