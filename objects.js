var playlist = { lofang : "88"}
function updatePlaylist(playl, artist, song) {
  Object.assign({}, playl, {[artist]: song})
  return playl
}
function removeFromPlaylist (playl, artist){
  delete playl.artist
  return playl
}