var playlist = { 'artist': 'song title'}

function updatePlaylist(obj, key, value) {
  obj[key] = value
  return obj
}

function removeFromPlaylist({}, key) {
  delete {}.key
  return {}
}