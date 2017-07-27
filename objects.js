var playlist = {
  linkinPark: "What I've done",
  justinBieber: "Baby",
  taylorSwift: "Bad Blood"
}

function updatePlaylist(playlist, artistName, songTitle) {
  //one option that worked was below
  //playlist[artistName] = songTitle
Object.assign(playlist, {[artistName]: songTitle})

  return playlist
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName]
  return playlist
}
