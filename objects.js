var playlist = {Temptations: "I wish it would rain", TheFourTops: "Ill be there"}

function updatePlaylist(object, key, value) {
  object[key] = value
  return object
}
function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName]
  return playlist
}
