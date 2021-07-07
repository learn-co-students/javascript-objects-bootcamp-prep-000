var playlist = {'Donald Byrd': 'Miss Kane', 'The Avalanches': 'Electricity'}

function updatePlaylist(Object, key, value){
  Object[key] = value
  return Object
}

function removeFromPlaylist(Object, key){
  delete Object[key]
  return Object
}