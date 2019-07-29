var playlist = new Object({keys: '2'});

function updatePlaylist(playlist, artistName, SongTitle)
{
  playlist[artistName] = SongTitle
  return playlist
}

function removeFromPlaylist(playlist, artistName)
{
  delete playlist[artistName]
  return playlist
}