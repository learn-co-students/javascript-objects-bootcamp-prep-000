var playlist = { JamesBlake : "Overgrown" };

function updatePlaylist (playlist, artistName, songTitle) {
  playlist = { [artistName] : songTitle };
  return playlist;
}

function removeFromPlaylist (playlist, artistName) {
  delete playlist[artistName];
  console.log(playlist);
  return playlist;
}
