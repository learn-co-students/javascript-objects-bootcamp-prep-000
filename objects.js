var playlist = new Object({Circa Survive: "Stop the Car"});

function updatePlaylist(playlist, artistName, songTitle){
  return Object.assign({}, playlist, {[artistName]: songTitle});
};

function removeFromPlaylist(playlist, artistName){
  if(playlist.artistName === true){
    delete playlist.artistName;
  }
};
