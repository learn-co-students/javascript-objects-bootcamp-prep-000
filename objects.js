var playlist = { 'Rihanna': 'Whats my name?' };

function updatePlaylist(object, artist, song) {
  return Object.assign(object, {[artist]: song});
}

function removeFromPlaylist(object, artist) {
  delete object[artist];
  return object;
}