var playlist = {NF: 'Outcast'}

function updatePlaylist (obj, artist, song) {
  obj[artist] = song
  return obj
}
function removeFromPlaylist(obj, artist) {
  delete obj[artist]
  return obj
}