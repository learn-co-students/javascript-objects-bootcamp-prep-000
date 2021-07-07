var playlist = {drake:"miss me", bruce:"dancing in the dark", meek:"chariot"};
function updatePlaylist(object,key,value) {
  object[key] = value
  return playlist
}

function removeFromPlaylist(object,key) {
  delete playlist[key]
  return playlist
}