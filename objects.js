var playlist =
{
  joeG: 'blues comin',
  ericC: 'my Heart goes on'
}

function updatePlaylist(playlistA, artistName, song)
{
  playlistA[artistName] = song;
  return playlistA;
}

function removeFromPlaylist(playlistA, artistName)
{
  delete playlistA[artistName];
  return playlistA;
}

