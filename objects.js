var playlist = { Future: "Big Rings" };

function updatePlaylist(obj, artistName, songTitle) {
  return obj[artistName] = songTitle
};

function removeFromPlaylist(playlist, artistName) {
  return delete playlist[artistName];
};