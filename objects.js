var playlist = {moshe:'guitar'}

function updatePlaylist (obj, artist, songTitle ){
  return Object.assign(obj, {[artist]: songTitle});
}
function removeFromPlaylist (playlist, artist){
  delete playlist[artist]
  return playlist
}


