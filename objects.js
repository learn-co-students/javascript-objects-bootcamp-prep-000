var playlist = {artist: 'title'}

function updatePlaylist (obj, key, value) {
  // obj = variable
  // key = artist name
  // value = song title
  
  obj[key] = value
  return obj
}

function removeFromPlaylist (obj, key) {
  // obj = variable
  // key = artist name
  
  delete obj[key]
  return obj
}