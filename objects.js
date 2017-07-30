
var playlist = { Imogen Heap: "Shh" };

function updatePlaylist(obj, key, val) {
  var newPlaylist = Object.assign({}, playlist, {key: "val"});
  return newPlaylist;
}

function removeFromPlaylist(obj, key) {
  delete obj.key;
  return playlist;
}
