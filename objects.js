var playlist = new Object();
var playlist = {bill:"pokemon"};

function updatePlaylist(playlist, artistName, songTitle){
  return playlist[artistName] = songTitle ;
}

function removeFromPlaylist(playlist, artistName){
  delete playlist[artistName]
  return playlist
}