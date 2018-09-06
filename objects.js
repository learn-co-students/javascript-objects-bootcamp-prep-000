var playlist = { Aerosmith: "Dream On" };

function updatePlaylist(object, artistName, songTitle) {
  object[artistName] = songTitle
  return object
}

function removeFromPlaylist(object, artistName) {
  delete object[artistName];
  return object
}