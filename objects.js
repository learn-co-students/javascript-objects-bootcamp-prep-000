var playlist = {
  Slipknot: "Duality",
  Manson: "Beautiful People",
  Kanye: "Stronger"
}
function updatePlaylist(playlist, Slipknot, Duality){
  playlist[Slipknot] = Duality
  return playlist
}
function removeFromPlaylist(playlist, Slipknot){
  delete playlist[Slipknot]
  return playlist
}