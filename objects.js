var playlist = {Motorhead: "Ace Of Spades"}
function updatePlaylist(playlist,artistName,songTitle)  {
  return Object.assign({}, playlist[artistName]=songTitle)
}
function removeFromPlaylist(playlist, artistName, songTitle)  {
  delete playlist[artistName]
}