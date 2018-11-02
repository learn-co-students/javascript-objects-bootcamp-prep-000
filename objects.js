var playlist = {
  ['Michael Jackson']:  'Billy Jean',
  ['Mstrkrft']:         'Street Justice',
  ['Daft Punk']:        'Get Lucky'
};

function updatePlaylist(playlist, artistName, songTitle)
{
  playlist[artistName] = songTitle;
  return playlist;
}

function removeFromPlaylist(playlist, artistName)
{
  delete playlist[artistName];
  return playlist;
}
