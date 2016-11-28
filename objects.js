var playlist = {song1: "artist1"};

var updatePlaylist = (playlist, artistName, songTitle) =>
{
  playlist[artistName] = songTitle;
  return playlist;
}

var removeFromPlaylist = (playlist, artistName) =>
{
  return {};
}
