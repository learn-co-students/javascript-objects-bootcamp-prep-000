var playlist = {
  godsmack: 'bulletproof',
  ffdp: 'remember everything',
  metallica: 'master of puppets'
}

function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle;
  return playlist;
}

function removeFromPlaylist(playlist, artistName){
  delete playlist[artistName];
  return playlist;
}