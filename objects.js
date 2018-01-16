var playlist = {'Kanye West':"Black Skinhead"};
function updatePlaylist(playlist, artist, title){
  Object.assign(playlist, {[artist]: title})
  return playlist
}
function removeFromPlaylist(playlist, artist){
  delete playlist[artist]
  return playlist
}