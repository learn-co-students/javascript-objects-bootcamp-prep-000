var playlist = {'Badfish': 'Sublime'}

function updatePlaylist(playlist,songName,artist){
  playlist[songName] = artist
  return playlist
}

function removeFromPlaylist(playlist, artistName){
  delete playlist[artistName]
  return playlist
}
