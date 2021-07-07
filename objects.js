var playlist = { 'Lou Reed': 'Walk on the Wild Side' };

function updatePlaylist(object, artist, title) {
  object[artist] = title;
  return object;
}

function removeFromPlaylist(object, artist) {
  delete object[artist];
  return object;
}
