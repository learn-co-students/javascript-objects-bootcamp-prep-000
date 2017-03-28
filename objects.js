var playlist = { artistName: 'songTitle'};

function updatePlaylist(playlist, artistName, songTitle){

  return Object.assign({},playlist, {[artistName]:songTitle})
  
}

function removeFromPlaylist(playist, artistName){

delete playlist.artistName;

return playlist;
  
}