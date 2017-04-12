var playlist = {
  Beyonce: "Love on top",
  Jayz: "Blue",
  Kanye: "Fame"
};

 function updatePlaylist(playlist, artist, title) {
  playlist[artist] = title
  return playlist
};

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName];
  return playlist;
};
