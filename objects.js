var playlist = {"Kendrick Lamar" : "DNA"};

function updatePlaylist(playlist, artistName, songTitle) {

  return Object.assign(playlist, {[artistName]:songTitle});

}

function removeFromPlaylist(playlist, artistName) {

  //var songs
  delete playlist[artistName];
  return playlist;

}
