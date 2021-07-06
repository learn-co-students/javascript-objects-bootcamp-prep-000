var playlist = {
  Korn: "Blind",
  Slipknot: "Duality"
};

function updatePlaylist(obj, artist, song) {
  var newPlay = Object.assign(obj, {[artist]:song});
  return newPlay;
}

function removeFromPlaylist(obj, art) {
  delete obj[art];
  return obj;
}
