var playlist={artistName:''};

function updatePlaylist(playlist, artistName, songTitle)
{
  playlist[artistName]=songTitle
  return playlist
}

function removeFromPlaylist(object, artistName)
{
  delete playlist.artistName;
  return playlist;
}
