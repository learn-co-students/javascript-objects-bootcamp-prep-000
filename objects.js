var playlist = { "Jason Mraz": "Running"};

function updatePlaylist(list, artist, song) {
  list[artist] = song;
}

function removeFromPlaylist(list, artist) {
  delete list[artist];
  return list;
}