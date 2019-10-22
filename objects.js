var playlist = {
  artistName: 'Song Title'
}

function updatePlaylist(obj, key, value) {
  obj[key] = value
  return obj
}

function removeFromPlaylist(targetObject, updatesObject) {
  return delete targetObject[updatesObject]
}
