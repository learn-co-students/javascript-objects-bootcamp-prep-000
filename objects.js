var playlist = { Soundgarden: "Superunknown"}

function updatePlaylist(playlist, artistName, songTitle)
{
  playlist[artistName] = songTitle
}

function removeFromPlaylist(playlist, artistName)
{
  delete playlist[artistName]
}