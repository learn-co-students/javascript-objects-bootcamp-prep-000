var playlist = {
  'Korpiklaani': 'Vodka'
}

var updatePlaylist = (xs, x, y) => {
  xs[x] = y
  return xs
}

var removeFromPlaylist = (xs, x) => {
  delete xs[x]
  return xs
}
