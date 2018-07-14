var playlist = {Drake: "God's Plan"}

function updatePlaylist(playlist, artistName, songTitle){
  Object.assign (playlist, {[artistName]: songTitle})
  return playlist
}

updatePlaylist(playlist, 'Phil Ochs', 'Slowdive')

function removeFromPlaylist(playlist, artistName){
  delete playlist.Slowdive;
  return playlist
}



