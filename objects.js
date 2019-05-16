var playlist = {
  'Gorillaz': 'Feel Good Inc.',
  '311': 'Too Much To Think',
  'Jawbreaker': 'Bivouac'
};

function updatePlaylist(playlist, artistName, songTitle) {
  return Object.assign(
    {}, playlist, {
      [artistName]: songTitle
    }
  );
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName];
  return playlist;
}
