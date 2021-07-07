var playlist = {
  Incubus: 'Drive',
  Ed_Sheeran: 'Lego House',
  Micheal_Jackson: 'Thriller'
}

function updatePlaylist(obj, artist, song) {
  return Object.assign(obj, { [artist]: song })
}

function removeFromPlaylist(obj, artist) {
  delete obj[artist]
  return obj
}
