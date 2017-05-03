var playlist = {};
var playlist = {
  artist: 'song',
  beyonce: 'lemonade',
  gavindegraw: 'chariot'
};

function updatePlaylist(playlist, artist, song){
  return Object.assign({}, playlist, {[artist]:song});
}

function removeFromPlaylist(playlist, artistName){
  delete playlist[artistName];
  return playlist;
}
