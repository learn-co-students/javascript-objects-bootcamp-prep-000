var playlist = {}
var playlist = { kendrick: "humble"}

function updatePlaylist(playlist, kendrick, humble)
{
  playlist[kendrick] = humble
  
  return playlist
}

function removeFromPlaylist(playlist, kanye)
{
  playlist = { kanye: "Gold Digger"}
  delete playlist.kanye
  return playlist
}




