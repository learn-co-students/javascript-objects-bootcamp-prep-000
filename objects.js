var playlist = {
  artistName: "Song titles"
};

function updatePlaylist(playlist, artistName, songTitle) {
  return Object.assign({}, playlist, {[artistName]: songTitle});
}


function removeFromPlaylist(playlist, artistName) {
  delete playlist.Kanye;
  return playlist;
}
