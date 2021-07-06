var playlist = {
  'Sum 41': 'Fat Lip',
  'Linkin Park': 'In The End'
}

function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle
  return playlist
}

function removeFromPlaylist(playlist, artistName){
  delete playlist[artistName]
  return playlist
}