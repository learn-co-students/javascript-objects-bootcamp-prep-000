var playlist = { artist: 'song' }; 
// keep abstract rather than hard coding when assigning key value pairs.
// also spaces between { and keyName and again space after valueName and before }



function updatePlaylist(playlist, artistName, songTitle) {
 return Object.assign(playlist, { [artistName]: songTitle });
 // playlist[artistName] = songTitle;
// return playlist;
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName];
  return playlist;
}


  



