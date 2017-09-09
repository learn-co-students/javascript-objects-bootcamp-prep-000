var playlist = new Object(
  {'Jack Johnson': 'Subplots'},
  {'Ben Rector': 'Sailboats'}
);

function updatePlaylist(playlist, artistName, songTitle)
{
  playlist[artistName] = songTitle
  return playlist
}

function removeFromPlaylist(playlist, artistName)
{
  delete playlist[artistName]
  return playlist
}
