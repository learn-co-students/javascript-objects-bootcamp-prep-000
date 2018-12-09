playlist = {'Alanis Morrisette': 'Hands Clean'}

function updatePlaylist(playlist, artistName, songTitle){
  playlist[artistName] = songTitle
  return playlist
}

function removeFromPlayList(playlist, artistName){
  delete playlist[artistName]
}