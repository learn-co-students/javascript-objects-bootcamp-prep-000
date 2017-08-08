var playlist = {
  MagneticMinds: 'Quantum Focus',
  Hurrate: 'start'
}

function updatePlaylist(obj, artistName, songTitle){
  return Object.assign({}, obj, {[artistName]: songTitle})
}

function removeFromPlaylist(obj, artistName){
  delete obj[artistName];
  return obj
}
