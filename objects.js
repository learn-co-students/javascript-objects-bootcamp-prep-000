var playlist = {Arctic_Monkeys: "Miracle Aligner"};
function updatePlaylist(playlist, artistName, songTitle) {
playlist[artistName] = 'songTitle'
return playlist
}
function removeFromPlaylist(playlist, artistName, songTitle) {
  delete playlist[artistName]
  return playlist
}
