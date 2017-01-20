var playlist = {
  DinahWashington: 'Mad About the Boy',
  SarahVaughn: 'After Midnight'
};

function updatePlaylist(playlist, artistName, songTitle) {
  return Object.assign(
    {}, playlist, { [artistName]: songTitle }
  )
};

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName];
    return playlist;
};
