var playlist = {Neyo: "Closer"};
function updatePlaylist(obj, artist, song) {
  obj[artist] = song
  return obj
}
function removeFromPlaylist(obj, name) {
  delete obj[name];
  return obj
}