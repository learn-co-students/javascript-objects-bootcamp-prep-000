var playlist = {
  'Britney Spears': 'Oops I Did It Again',
  'Christina Aguilera': 'Genie in a Bottle'
}

function updatePlaylist(obj, artist, song) {
  obj[artist] = song
  return obj
}

function removeFromPlaylist(obj, artist){
  delete obj[artist]
  return obj
}