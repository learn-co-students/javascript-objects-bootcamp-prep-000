var playlist = {name: "title"};

function updatePlaylist(playlist, name, title) {
  playlist[name] = title;
  return playlist;
}

function removeFromPlaylist(playlist, name) {
  var artist = name;
  delete playlist[artist];
  return playlist;
}