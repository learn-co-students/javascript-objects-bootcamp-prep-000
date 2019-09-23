var playlist = {'Pink Floyd':'Dark Side of The Moon'}

function updatePlaylist(playlist,artist,song){
  return Object.assign({},playlist,{[artist]: song})
}
function removeFromPlaylist(playlist,artist){
  delete playlist[artist]
  return playlist
}