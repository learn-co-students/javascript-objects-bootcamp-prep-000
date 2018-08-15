const playlist = {'iron maiden': 'drifter'}

function updatePlaylist(playlist, artistName, songTitle){
  playlist[artistName] = songTitle
  return playlist
  //{...playlist, artistName: 'songTitle'}
}

function removeFromPlaylist(playlist, artistName){
  delete playlist[artistName]
  return playlist
}
