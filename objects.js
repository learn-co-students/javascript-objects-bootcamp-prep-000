var playlist = new Object();

var playlist = {
  "Slowdive": "Alison",
  "My Bloody Valentine": "Sometimes"
};


function updatePlaylist(playlist, artistName, songTitle) {
  return Object.assign({}, playlist, { [artistName]: songTitle});
}

playlist = updatePlaylist(playlist, "Phil Ochs", "Here's to the State of Mississippi");

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName];
  return playlist;
}

playlist = removeFromPlaylist(playlist, Slowdive);
