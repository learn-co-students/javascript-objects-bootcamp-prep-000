var playlist = {kendrick: "to pimp", kanye:"Ultra"}
function updatePlaylist(playlist, artestName, songTitle){
  Object.assign(playlist,{[artestName]:songTitle})
  return playlist
}
function removeFromPlaylist(object, artest){
  delete object[artest]
  return object
}
