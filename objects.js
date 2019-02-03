var playlist = {
  artist: "Maroon 5", 
  song: "Sugar"};
  
function updatePlaylist(playlist, artistName, songTitle)
{
  playlist[artistName] = songTitle
  return playlist
}

function removeFromPlaylist(playlist, artistName)
{
delete playlist[artistName ]
return playlist
}