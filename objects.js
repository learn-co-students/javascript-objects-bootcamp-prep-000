var playlist = {"Lady Gaga": "Hey Girl"};

function updatePlaylist(playlist, artistName, songTitle) {
   playlist[artistName] = songTitle
  return playlist
};

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName];
  return playlist
};
