var playlist = {
  Kanye: "Gold Digger",
  the_Beatles: ["Eight Days a Week", "Love Me Do", "Lucy in the Sky with Diamonds"]
}

function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle;
  return playlist
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName];
  return playlist
}