var playlist = {
  "Kanye": "Gold Digger"
};

function updatePlaylist(playlist, artistName, songTitle) {
  Object.assign(playlist, { [artistName]: songTitle })
  return playlist;
}

function removeFromPlaylist(blah, artistName) {
  delete playlist[artistName];
  return playlist
}
