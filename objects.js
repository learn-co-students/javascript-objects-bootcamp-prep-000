var playlist = {};

function updatePlaylist(playlist, artistName, songTitle){
  playlist[artistName] = songTitle;
  return playlist;
}

var Kanye = {Kanye: "Gold Digger"};

function removeFromPlaylist(playlist, artistName){
  delete playlist.artistName;
  return playlist;
}
