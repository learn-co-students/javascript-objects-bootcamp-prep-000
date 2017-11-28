var playlist = new Object({artist: 'songTitle' })

function updatePlaylist(playlist,artistName,songTitle){
  return Object.assign(playlist, {[artistName]: songTitle})
}

function removeFromPlaylist(playlist,artistName){
  delete playlist.artistName;
  playlist = {}
  return playlist
}
