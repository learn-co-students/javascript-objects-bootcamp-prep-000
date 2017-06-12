playlist = { artistName : "songTitle"}

function updatePlaylist(playlist, artistName, songTitle)
{
  Object.assign(playlist, {[artistName]:songTitle})
  return playlist
}

function removeFromPlaylist(playlist, artistName)
{
  var playlist = { artistName : "songTitle"}
  delete playlist.artistName
  return playlist
}
