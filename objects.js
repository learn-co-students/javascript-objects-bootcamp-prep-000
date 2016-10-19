var playlist = { artistName : "song"};

function updatePlaylist(list, artistName, songTitle){
  return Object.assign({}, list, { [artistName]:songTitle})
}

function removeFromPlaylist (list, artistName){
  delete playlist.artistName;
  return playlist
}
