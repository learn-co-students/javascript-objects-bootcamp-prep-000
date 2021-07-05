var playlist = {
  eagles: "Hotel California",
  evelyn: "Norwegian Beauty",
  ryan:"To be without you",
  estelle: "American Boy"
}

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
