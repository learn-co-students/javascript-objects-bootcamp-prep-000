var playlist = new Object()
playlist.cake = "the distance"

function updatePlaylist(playlist, artistName, songTitle){
  playlist[artistName] = songTitle
  return playlist
}

function removeFromPlaylist(playlist, artistName){
  delete playlist.artistName
  return playlist = new Object()
}
