var playlist = {
  meladze: 'Sera',
  shura: 'Prosti',
  yolka: 'Paris' }

function updatePlaylist(obj, name, song) {
  return Object.assign({}, obj, {[name]: song})
}

function removeFromPlaylist(obj, name) {
  delete obj[name]
  return obj
}

// console.log(Object.keys(playlist).length);
