var playlist = {
  blink182: 'Whats My Age Again?',
  chaseRice: 'Eyes on You',
  thomasRhett: 'Marry Me'
}

function updatePlaylist(obj, key, value){
  return Object.assign({}, obj, {[key]: value})
}

function removeFromPlaylist(obj, key){
  var variable = key
  delete obj[variable];
  return obj
}