 const playlist = {
 song: 'I wanna  love you '
 }
   
// 2 objects updatePlaylist(playlist, artistName, songTitle) adds the `artistName: songTitle` key-value pair to `playlist`:

const updatePlaylist = function updatePlaylist(playlist, artistName, songTitle)  {
  playlist[artistName] = songTitle

  return playlist
}

function removeFromPlaylist(playlist, artist) {
 return  delete playlist[artist]
}