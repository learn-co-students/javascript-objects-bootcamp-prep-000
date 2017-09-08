
var playlist = {'ZAYN': 'PILLOWTALK',
    'John Mayer': 'Free Fallin',
    'Adele': 'Hiding My Heart',
    'Brandi Carlile': 'If There Was No You'}

function updatePlaylist(obj, artistName, songTitle){
  updatedPlaylist = Object.assign({}, obj, {[artistName]: songTitle})
  return updatedPlaylist
}

function removeFromPlaylist(obj, artistName){
  updatedPlaylist = Object.assign({}, obj)
  delete updatedPlaylist[artistName]
  return updatedPlaylist
}
