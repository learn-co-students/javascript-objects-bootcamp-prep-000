var playlist = {BRMC: "Talk"};

function updatePlaylist(obj, artist, song) {
  return obj[artist] = song;
}

function removeFromPlaylist(obj, artist) {
  delete obj[artist];
  return obj;
}
