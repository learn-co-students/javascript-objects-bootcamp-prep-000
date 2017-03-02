var playlist = {Mussogorsky: "Pictures in an exhibition"};

function updatePlaylist(object, artistName, songTitle) {
  return Object.assign({}, object, {[artistName]: songTitle })
}

function removeFromPlaylist(object, artistName) {
  delete playlist["Mussogorsky"];
  return playlist
}
