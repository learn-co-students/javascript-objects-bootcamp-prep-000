var playlist = {
  Tycho: "Division"
};

function updatePlaylist(object, artist, title) {
  object[artist] = title;
  return playlist;
}

function removeFromPlaylist(object, artist) {
  delete object[artist];
  return object;
}