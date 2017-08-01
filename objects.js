var playlist= {Sia: "Chandelier", Halsey: "Castle", imagineDragon: "Demons"}

function updatePlaylist(playlist, artistName, songTitle)
{
  return Object.assign({}, playlist, { [artistName]: songTitle })
}

function removeFromPlaylist(playlist, artistName)
{
  var name= artistName
  delete playlist[name]
  return playlist
}
