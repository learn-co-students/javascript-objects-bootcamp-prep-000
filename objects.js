var playlist = {Madonna:"Papa don't preach"}

function updatePlaylist(playlist, artistName, song){
  playlist[artistName] = song
  return playlist
}

function removeFromPlaylist(playlist, artistName){
  delete playlist.artistName
  return playlist
}