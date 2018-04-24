var playlist = {Slowdive: "Alison"};

function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle;
  return playlist;
}

updatePlaylist(playlist, "My Bloody Valentine", "Sometimes");
updatePlaylist(playlist, "Phil Ochs", "Here's to the State of Mississippi");

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName];
}

removeFromPlaylist(playlist, "Slowdive");
