var playlist = {
  song: "song 1",
  sosdd: "song 2",
  sonasdd: "song 3"
};

function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle
  return playlist
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist.Kanye;
  return playlist
}
