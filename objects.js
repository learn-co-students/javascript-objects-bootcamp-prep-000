var playlist = {artistNames : "song titles" }

//adds artists name and song title to our playlist
function updatePlaylist(playlist, artistName, songTitle){
  playlist[artistName] = songTitle

  return playlist
}

updatePlaylist(playlist, 'Architects', 'Doomsday')

//removes artists name and song title from our playlist
function removeFromPlaylist(playlist, artistName){
  delete playlist.Architects

  return playlist
}

removeFromPlaylist(playlist, 'Architects')
