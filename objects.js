var playlist = { Dawes: "Things Happen"};

function updatePlaylist (list, name, song) {
  list[name] = song;
  return list;
}

function removeFromPlaylist (list, name) {
  delete list[name]; return list;
}