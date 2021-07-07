var playlist = new Object({'Donna Summer':'Grand Illusion','Chic':'Everybody Dance'})

function updatePlaylist(playlist,artistName,songTitle){
  //   obj[artistName] = songTitle
  return Object.assign({}, playlist, {[artistName]:songTitle})
}

function removeFromPlaylist(obj,artistName){
  delete obj[artistName]
  return obj
}
