var playlist = {nickeback: 'someday'}

function updatePlaylist(obj, key, val) {
  obj[key] = val

  return obj
}

function removeFromPlaylist(obj, key) {
  delete obj[key] // obj.key will fail

  return obj
}
