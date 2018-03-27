var playlist = {
  johnnyAndSanto: 'sleepwalk',
  manuelGarcia: 'tuVentana',
  sharonVanEtten: 'oneDay'
}

function updatePlaylist(playlist, artistName, song) {
 playlist[artistName] = 'song'; 
 return playlist
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName]
  return playlist
}