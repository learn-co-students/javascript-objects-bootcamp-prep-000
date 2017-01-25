var playlist = {Kanye: "The G"};

function updatePlaylist(list, artist, title) {
  list[artist] = title;
  return list
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName];
  return playlist
}
