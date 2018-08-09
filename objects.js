var playlist = { STYG : 'This is More' }

function updatePlaylist(playlist, artistName, songName)
{
  playlist[artistName] = songName;
  console.log(playlist);
  return playlist;
}

function removeFromPlaylist(playlist, artistName)
{
  delete playlist.artistName;
}
