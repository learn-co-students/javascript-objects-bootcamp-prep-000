var playlist = {
  Tool: 'Aenima',
  Orbital: 'Halcyon on and on'
}

function updatePlaylist(playlist,artistName,songTitle){
  playlist[artistName] = songTitle
  return playlist

}

function removeFromPlaylist(playlist,artistName){
  delete playlist[artistName]
  return playlist

}
