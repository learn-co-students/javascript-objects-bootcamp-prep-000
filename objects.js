var playlist = {Coldplay:"Viva la Vida"};

function updatePlaylist(songPlaylist, artistName, songTitle){
  return Object.assign({}, songPlaylist, {[artistName]:songTitle});
}

function removeFromPlaylist(playlist, artistName){
  delete playlist[artistName];
  return playlist;
}
