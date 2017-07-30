var playlist = {Kanye: "Gold Digger"};

function updatePlaylist (pl, artist, song) {
  pl[artist] = song;
  return pl;
}

function removeFromPlaylist (pl, artist) {
  delete pl[artist];
  return pl;
}
