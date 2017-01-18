var playlist = {
  bowie: 'ziggy',
  stones: 'down home girl'
  //Test requires two keys and two values to be defined in order to pass
}

function updatePlaylist(playlist, artistName, songTitle) {
  return Object.assign({}, playlist, {[artistName]: songTitle})
  //playlist was used as the object because it is referenced in the function parameters
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName];
  return playlist;
  //For some reason playlist period does not work in this instance
}
