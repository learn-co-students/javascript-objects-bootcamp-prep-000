var playlist = {'artistName':'songTitle'};

function updatePlaylist(playlist, artistName, songTitle) {
  return Object.assign({}, playlist, {'Phil Ochs': 'Here\'s to the State of Mississippi'});
};

function removeFromPlaylist(playlist, artistName) {
  var key = "artistName";
  delete playlist["artistName"];
  return {};
}
