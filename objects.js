const playlist = {
  artistName: 'songTitle'
};

function updatePlaylist(playlist, artistName, songTitle) {
  return Object.assign(playlist, { [artistName]: songTitle })
};

console.log(updatePlaylist());

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName];
};

console.log(playlist());
