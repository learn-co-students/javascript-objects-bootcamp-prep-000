var playlist = {
  artist:"D'Angelo",
  song:"Unshaken"
}

function updatePlaylist(playlist, artistName, songTitle){
 // return Object.assign({}, playlist, { artistName: songTitle })
 playlist[artistName] = songTitle
}
//updatePlaylist(playlist, artistName, songTitle)
function removeFromPlaylist(playlist, artistName){
 delete playlist[artistName]
  
}