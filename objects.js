var playlist = { artists:"song",}

function updatePlaylist( playlist,artists,song)
{ 
  playlist[artists]=song
  
  return playlist
} 
function removeFromPlaylist(playlist,artists)
{
  delete playlist[artists];
  return playlist
  
}