var playlist = {artistName:"songTitle"};

function updatePlaylist(playlist, artistName, Songtitle){
  return Object.assign({[artistName]:Songtitle});
}

function removeFromPlaylist(playlist, artistName){
    delete playlist[artistName];
  return playlist;
}
