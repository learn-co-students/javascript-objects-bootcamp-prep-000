var playlist = {mrbean:"the bubbo"}

function removeFromPlaylist(playlist,artistName)
{
  delete playlist[artistName]
  return playlist
}
function updatePlaylist(playlist,artistName,songTitle)
{
  playlist[artistName]=songTitle
  return playlist
}
