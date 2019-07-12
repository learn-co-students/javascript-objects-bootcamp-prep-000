var playlist = {"Freddie Gibbs": "Giannis"}

function updatePlaylist(playlist, artistName, songTitle){
  return Object.assign(playlist, {[artistName]: [songTitle]})
}

function removeFromPlaylist(playlist, artistName, songTitle){
  delete playlist[artistName]
  return playlist
}
