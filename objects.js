var playlist = { artist: [] , song: [] }

function updatePlaylist(obj, key, value) {
  obj[key] = value
  return obj
}

function remomveFromPlaylist(obj, key){
  delete obj.key
  return obj
}