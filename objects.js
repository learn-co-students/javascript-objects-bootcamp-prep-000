const playlist = {michael: 'thriller', elvis: 'something'};

function updatePlaylist(playlist, artistName, songTitle){
  playlist[artistName] = songTitle
  return playlist
}

function removeFromPlaylist(playlist,artistName){
  delete playlist[artistName]
  return playlist
}