var playlist = { genesis: 'Turn it on Again'}

function updatePlaylist(obj, artist, song) {
  return Object.assign({}, obj, { [artist]: song })
}

function removeFromPlaylist(obj, artist) {
  obj = delete obj.artist
}
