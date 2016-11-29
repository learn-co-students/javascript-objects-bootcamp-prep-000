var playlist = {Guns: "New Rose", Motian: "Pithecanthropus Erectus", Rage: "Bulls on Parade"};

function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle
  return playlist
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName]
  return playlist
}
