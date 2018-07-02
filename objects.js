var playlist = {artistName: "songTitles"};

function updatePlaylist (obj, artistName, songTitle){
  playlist [artistName] = songTitle
  return playlist
}

function removeFromPlaylist (playlist, artistName) {
 delete playlist.Slowdive
 return playlist
}