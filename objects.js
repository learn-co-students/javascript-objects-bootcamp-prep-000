var playlist = { name: 'song'}

function updatePlaylist(playlist, artistName, songTitle){
  playlist[artistName] = songTitle
  return playlist
}

function removePlaylist(playlist, artistName){
  delete playlist.artistName
  return playlist
}