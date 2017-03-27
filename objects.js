var playlist = {Ciara: "1 2 Step"};
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
