
var playlist = {abc:"def"};

function updatePlaylist(pl,artist,songtitle) {
  return Object.assign(pl,{[artist]:songtitle})
}

function removeFromPlaylist(plt,artist) {
  delete plt[artist]
  return plt
}