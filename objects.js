var playlist = {
  nirvana: "Come As You Are"
};

function updatePlaylist(playlist, artist, song) {
  return Object.assign({}, playlist, {[key]: song});
}

function removeFromPlaylist(playlist, artist) {
  delete playlist.artist;
  return playlist;
}