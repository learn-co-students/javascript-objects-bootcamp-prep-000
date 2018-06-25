var playlist = {PinkFloyd: "Money"}

function updatePlaylist(obj, key, title) {
  return obj[key] = title
}

function removeFromPlaylist(obj, key) {
  delete obj[key]
  return obj
}
