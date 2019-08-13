
var playlist = {'cher': "believe"};

const artistName = 'Phil Ochs'
function updatePlaylist(playlist, artistName, songTitle) {
  var playlist = {[artistName]: songTitle};
  var artistName = 'Phil Ochs'
  var songTitle = "Here's to the State of Mississippi"
  return Object.assign({}, playlist, {[artistName]: songTitle})
}

function removeFromPlaylist(playlist, artistName) {
  var playlist = {[artistName]: "Gold Digger"}
  var artistName = 'Kanye'
  delete playlist[artistName]
  return playlist
}
