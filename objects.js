var playlist = {
  'Empire of the Sun': 'Walking on a Dream'
}

function updatePlaylist(obj, key, value) {
  obj[key] = value
  
  return obj
}

function removeFromPlaylist(obj, key) {
  delete obj[key]
  
  return obj
}