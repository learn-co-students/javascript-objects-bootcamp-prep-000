var playlist = {};
playlist['Of monsters and men'] = 'Little Talks';

function updatePlaylist(playlist, artistName, songTitle){
  var initalObj = {};
  initalObj[artistName] = songTitle
  return Object.assign({}, playlist, initalObj);
}

function removeFromPlaylist(playlist, artistName){
  delete playlist[artistName]
  return playlist;
}
