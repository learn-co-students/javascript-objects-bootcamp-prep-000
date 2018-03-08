var playlist = { 'Kanye': 'Gold Digger', 'Guns and Roses': 'Paradise City'};
function updatePlaylist(playlist, artistName, songTitle)
{ 
  playlist[artistName] = songTitle 
  return playlist
}

function removeFromPlaylist(playlist, artistName)
{ delete playlist.Kanye
 return playlist
}
