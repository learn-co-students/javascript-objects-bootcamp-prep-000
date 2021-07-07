var playlist = {
  maxwell: 'Pretty Wings',
  sting: 'Roxanne',
  "cindy lauper": 'Girls just wanna have fun'
};

function updatePlaylist(obj, artistName, songTitle) {
  return Object.assign({}, obj, {[artistName]: songTitle});
}

function removeFromPlaylist(playlist, artistName) {
 delete playlist[artistName];
 return playlist;
}