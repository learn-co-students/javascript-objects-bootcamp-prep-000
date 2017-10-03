var playlist = new Object({Fruition : 'I Don\'t Mind'});

function updatePlaylist(playlist, artistName, songTitle) {
  return Object.assign({}, playlist, {[artistName]: songTitle} )
}


function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName];
  return playlist;
}
