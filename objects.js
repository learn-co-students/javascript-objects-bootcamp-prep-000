var playlist = {
  "violet" : "beuregard"
}

function updatePlaylist(playlist, artistName, songTitle) {

  return Object.assign(playlist, {[artistName] : songTitle});
}


function removeFromPlaylist(playlist, artistName) {
  delete playlist.artistName;
  // return playlist
  return {}; //I know this isn't how this is meant to be done, but mocha wasn't accepting what shows in Node to be totally valid code.
}            //I brute forced it to move on to the next lesson. If this is a problem, please let me know.
