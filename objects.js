var playlist = {
  'Carly Rae Jepsen' : "Run Away With Me"
};


function updatePlaylist(playlist, artistName, songTitle){
  playlist[artistName]=songTitle;
  return playlist;
}

function removeFromPlaylist(playlist, artistName){
  delete playlist[artistName];
  return playlist;
}