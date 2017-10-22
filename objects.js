var   playlist = {artName : "Song title" , artName2 : "Song title2"};

function updatePlaylist(playlist, artistName, songTitle){
  return playlist={[artistName] : songTitle}
}

function removeFromPlaylist(playlist, artistName){
  delete playlist[artistName]
  return playlist
}
