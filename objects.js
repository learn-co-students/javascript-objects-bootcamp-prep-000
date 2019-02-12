var playlist = {
  "James Taylor":"Fire and Rain"
}
function updatePlaylist(obj, artist, title){
  obj[artist] = title
}
function removeFromPlaylist(obj, artist){
  delete obj[artist]
}
