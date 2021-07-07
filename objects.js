var playlist = {
  adele: 'Hello',
  queen: 'I Want to Break Free',
  beti: 'James and Celia'
};

function updatePlaylist(playlist, artistName, songName) {
  playlist[artistName] = songName;
  return playlist;
}

function removeFromPlaylist(playlist, artistName){
  delete playlist[artistName];
  return playlist;
}
