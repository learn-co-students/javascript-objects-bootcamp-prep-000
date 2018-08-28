var playlist = {
  'Violent Femmes': 'Add It Up',
  'The Whispers': 'And The Beat Goes On'
}

function updatePlaylist(playlist, artistName, songTitle) {
//use dot notation: key is always taken as the literal string given!
//SO: to access values of a VARIABLE KEY, require bracket notation
  playlist[artistName] = songTitle;

  return playlist;
}

function removeFromPlaylist(playlist, artistName) {
  //same as above: to access values of a VARIABLE KEY, require bracket notation
  delete playlist[artistName];

  return playlist;
}
