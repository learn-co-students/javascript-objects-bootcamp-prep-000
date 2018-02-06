var playlist = new Object({Drake : 'God\'s Plan', TravisScott : 'Goosebumps', Khalid : 'Silence'});

function updatePlaylist(obj, artist, song) {
  obj[artist] = song;
  return obj;
}

function removeFromPlaylist(obj, artist) {
  delete obj[artist];
  return obj;
}