var playlist = { artistName: "Maroon 5" };

function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle;
  return playlist;
}

updatePlaylist(playlist, "artist", "Macklemore");

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName];
  return playlist;
}
