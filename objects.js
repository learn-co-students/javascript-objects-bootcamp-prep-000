var playlist= {drake:"One Dance"};

function updatePlaylist(playlist, artistName, songTitle){
playlist[artistName]= songTitle
  return playlist
}

function removeFromPlaylist(playlist, artistName, songTitle){
delete playlist[artistName]
  return playlist
}
