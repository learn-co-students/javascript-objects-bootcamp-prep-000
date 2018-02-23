var playlist = { iz: 'oe'};

function updatePlaylist( pl, artist, song) {
  pl[artist] = song;
  return pl;
}

function removeFromPlaylist(pl, artist) {
  delete pl[artist];
  return pl;
}
