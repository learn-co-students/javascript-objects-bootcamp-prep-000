var playlist = {MJ: "Beat It"};

function updatePlaylist(obj, artist, title) {
  return Object.assign({}, obj, {[artist] : title});
}

function updateObjectWithObject(targetObject, updatesObject) {
  return Object.assign({}, targetObject, updatesObject)
}

function removeFromPlaylist(obj, artist) {
  delete playlist.MJ;
  return playlist;
}


