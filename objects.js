var playlist = {
  Kanye : "Gold Digger"
};

console.log(typeof playlist)
console.log(playlist)

function updatePlaylist (playlist, artistName, songTitle) {
  playlist[artistName] = songTitle
  return playlist
}

function removeFromPlaylist (playlist, artistName) {
  delete playlist[artistName]
  return playlist
}
