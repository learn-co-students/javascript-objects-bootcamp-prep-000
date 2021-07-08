var playlist = { Miyavi: 'Stronger' };

function updatePlaylist(playlistName, artist, song) {
  playlistName[artist] = song;
  return playlistName;
}

function removeFromPlaylist(playlistName, artist) {
  delete playlistName[artist];
  return playlistName;
}