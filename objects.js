const playlist = { Nirvana: 'lithium'}

function updatePlaylist(object,artistName,songTitle){
  playlist[artistName]=songTitle;
return playlist
}

function removeFromPlaylist(object,artistName){
  delete playlist[artistName]
  return playlist
}
