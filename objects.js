var playlist = { artistName: "songTitles" } ; 

function updatePlaylist(playlist, artistName, songTitle) {playlist[artistName] = songTitle

  return playlist
  }
  
function removeFromPlaylist(playlist, artistName) {
  // console.log(playlist.keys)

  delete playlist[artistName];
  
  return playlist
}