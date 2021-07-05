var playlist = { beatles: "yellow submarine" };

function updatePlaylist(playlist, artist, title) {
  return playlist.assign({}, playlist, {artist:['title']});
}

function removeFromPlaylist(playlist, artist) {
  delete playlist.artist;
  return playlist;
}