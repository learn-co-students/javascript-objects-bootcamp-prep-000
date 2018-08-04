var playlist = {
  john: 'gravity',
  maroon: 'wait'
}


function updatePlaylist (playlistObject, artistName, songTitle) {
  
 return playlistObject[artistName] = songTitle
  
}
function removeFromPlaylist(playlistObject,artistName){
  delete playlistObject[artistName]
  return playlistObject
}