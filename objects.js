var playlist = {"artist names": "song titles"}; //creating an object
function updatePlaylist(playlist, name, title) {
  playlist[name] = title
  return playlist
}
function removeFromPlaylist(Obj, name) {
  delete Obj[name];
  return Obj
}
