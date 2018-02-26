var playlist = new Object({artistName: 'songtitle'})

function updatePlaylist (obj, artistName, songTitle) {
   obj[artistName] = songTitle 
  return obj
  }

function removeFromPlaylist (playlist, artistName) {
  delete playlist[artistName]
  return playlist
}
