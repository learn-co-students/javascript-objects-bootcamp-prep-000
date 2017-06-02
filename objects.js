
var playlist = {
  Beatles: "Let it Be",
  'Bob Dylan': "Make You Feel My Love",
  'Bruno Mars': "24 Carat Magic"
};


function updatePlaylist(playlist, artistName, songTitle) {
  return Object.assign({}, playlist, { [artistName]: songTitle})
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName];
  return playlist
}
