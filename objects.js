var playlist = {
  taylor: 'song1',
  beyonce: 'song4',
  adele: 'song5'
};

function updatePlaylist(obj, artist, song) {
  obj[artist] = song;
  return obj;
}

function removeFromPlaylist(obj, artist) {
  delete obj[artist];
}