var playlist = {
  'Journey': 'Don\'t Stop Believing',
  'Dire Straits': 'Money for Nothing',
  'The Who': 'Baba O\'Riley'
};

function updatePlaylist(playObj, artist, song) {
  return Object.assign({}, playObj, { [artist]: song })
}

function removeFromPlaylist(playObj, artist) {
  delete playObj[artist]
  return playObj
}
