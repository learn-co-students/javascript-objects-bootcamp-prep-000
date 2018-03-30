var playlist = { Slowdive: "Alison" };

function updatePlaylist(playlist, artistName, songTitle) {
  playlist['My Bloody Valentine'] = "Sometimes";
  playlist['Phil Ochs'] = "Here's to the State of Mississippi";
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist.Slowdive;
}