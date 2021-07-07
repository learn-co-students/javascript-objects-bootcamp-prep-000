const playlist = {
  'Slowdive': 'Alison',
  'My Bloody Valentine': 'Sometimes'
};

const updatePlaylist = (playlist, artistName, songTitle) => {
  Object.assign(playlist, {[artistName]: songTitle});
  return playlist;
};


const removeFromPlaylist = (playlist, artistName) => {
  delete playlist[artistName];
  return playlist;
};

