var playlist = {artistName: 'Song Titles'}

function updatePlaylist(obj, key, value){
  return Object.assign({},playlist, {[artistName]: 'Song Titles'})
}

updatePlaylist 


function removeFromPlaylist(obj, key){
 delete playlist.artistName
 return playlist
}