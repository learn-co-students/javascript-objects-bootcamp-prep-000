var playlist = {}

function updatePlaylist(obj, s1, s2) {
  return Object.assign({},obj, s1, s2)
}

function removeFromPlaylist(obj, s1) {
  delete obj.s1
  return obj
}

