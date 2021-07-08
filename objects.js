var playlist = {
  Eminem: 'When Im gone',
  Hillsong: 'Sing sing sing',
  ThreeDoorsDown: 'Kryptonite'
};

function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle;
  return playlist;
};

function removeFromPlaylist(playlist, artistName) {
  delete (playlist[artistName]);
  return playlist;
};
