var playlist = {
  Beyonce: "Put A Ring On It"
}

function updatePlaylist(playlist, johnMayer, slowDancingInABurningRoom){
  playlist[johnMayer] = slowDancingInABurningRoom
  return playlist
}

function removeFromPlaylist(playlist, johnMayer){
  delete playlist[johnMayer]
  return playlist
}
