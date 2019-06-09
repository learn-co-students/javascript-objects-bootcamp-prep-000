var playlist = {
  "tupac": "All Eyez on Me",
  "biggie": "Who Shot Ya"
};

function updatePlaylist(playlist, artist, song) {
  playlist[artist] = song;
  return playlist;
}

function removeFromPlaylist(playlist,artist) {
  delete playlist[artist];
  return playlist;
}