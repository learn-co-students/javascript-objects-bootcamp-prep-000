var playlist = { SufjanStevens: 'Mystery of Love', KidCudi: 'Reborn', FrankOcean: 'White Ferrari' };

function updatePlaylist(playlist, artist, song) {
  playlist[artist] = song;
  return playlist;
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName];
}