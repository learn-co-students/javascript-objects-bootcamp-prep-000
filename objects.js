var playlist = {Madonna: 'Material Girl'} //the key will need to be one word, implying the artist name will need to be one word

function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle
  return playlist
}

function removeFromPlaylist(playlist, artistName){
  delete playlist[artistName]
  return playlist
}
