var playlist = {
  Funkadelic: "One Nation Under a Groove",
  GratefulDead: "Sugar Magnolia",
  HerbieHancock: "Chameleon"
}

function updatePlaylist(playlist, artistName, songTitle) {
  Object.assign(playlist, {[artistName]: songTitle})
  return playlist
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName]
  return playlist
}
