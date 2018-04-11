var playlist = {
  "Slowdive": "Alison",
  "My Bloody Valentine": "Sometimes"
};

function updatePlaylist(playlist, artistName, songTitle) {
  Object.assign({}, playlist, { [artistName]: songTitle });
}

updatePlaylist(playlist, "Phil Ochs", "Here's to Mississippi");