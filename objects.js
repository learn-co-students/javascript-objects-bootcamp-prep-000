var playlist = {coldplay:'paradise',blue:'onelove'}

function updatePlaylist(playlist,artistName,songTitle)
{
  playlist[artistName] = songTitle
  return playlist
}

updatePlaylist(playlist,'EdwardMaya','DessertRain')

function removeFromPlaylist(playlist, artistName)
{
  delete playlist[artistName]
  
  return playlist
}

removeFromPlaylist(playlist,'EdwardMaya')