var playlist = {Lumineers: "Ophelia"};

function updatePlaylist(object, artistName, songTitle) {
  return Object.assign({}, object, {[artistName]: songTitle })
}

function removeFromPlaylist(object, artistName) {
  delete playlist["Lumineers"];
  return playlist
}
