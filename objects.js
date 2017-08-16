var playlist = {"Green Day": "Wake Me Up When September Ends"}

function updatePlaylist(playlist, artistName, songTitle){
  return Object.assign({}, playlist, {[artistName]:songTitle})
}


function removeFromPlaylist(playlist, artistName){
  delete playlist[artistName];
  return playlist
}
