var playlist = {kendrick: 'alright'}

function updatePlaylist(playlistObject, artist, song){
  return Object.assign(playlistObject, {[artist]: song})
}

function removeFromPlaylist(playlistObject, artist){
  delete playlistObject[artist]
  return playlistObject
}


