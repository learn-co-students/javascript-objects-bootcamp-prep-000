var playlist = {
  artistName: "song",
  kanyeWest: "gold digger",
  beyonce: "single ladies"
} ;

function updatePlaylist (playlist, artistName, songTitle) {
  playlist[artistName] = songTitle
  return playlist;
}


function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName]
  return playlist;
}
