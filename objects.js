var playlist = {
  Kanye: 'Gold digger',
  Nas: 'Life is a b',
  BigL: 'Put it on'
}

function updatePlaylist(obj, key, value) {
     obj[key] = value
    return obj
}

function removeFromPlaylist(obj, key) {
  delete obj[key]
  return playlist
}