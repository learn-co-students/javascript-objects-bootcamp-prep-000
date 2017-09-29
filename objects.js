var playlist =  {
  'Lady Gaga': 'Poker Face',
  'DJ Tiesto': 'Adagio of Strings',
  'Muzzy': 'Escape'
};

function updatePlaylist(playlist, artist, song) {
  return Object.assign({}, playlist, { [artist]: song })
}

function removeFromPlaylist(playlist, artist) {
  var playlistClone = Object.assign({}, playlist)
  delete playlistClone[artist]
  return playlistClone
}
