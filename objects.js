var playlist = new Object({Abba: 'Dancing Queen'});

function updatePlaylist(obj,artist,song) {
  obj[artist] = song;
  return obj;
}

function removeFromPlaylist(obj,artist,song) {
  delete obj[artist];
  return obj;
}
