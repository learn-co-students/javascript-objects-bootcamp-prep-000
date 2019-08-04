
var playlist = new Object({ puth: 'gaye', ratm: 'revolver', pachelbel: 'canon' });

function updatePlaylist(playlist, nacho, ramses) {
  return Object.assign({}, playlist, { [nacho]: ramses })
}

function removeFromPlaylist(playlist, puth) {
  delete playlist[puth];
  return playlist
}

////OKAY I wasted way too much time on this. Especially the 5 minutes where I had a period instead of the brackets, because the tutorial showed a period. Why would they do that? Thank goodness for StackOverflow. 