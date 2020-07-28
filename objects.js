var playlist = {Ariana: "God is a Woman"};

function updatePlaylist() {
  playlist["Slowdive"] = "Alison"
  playlist["My Bloody Valentine"] = "Sometimes"
  playlist["Phil Ochs"] = "Here's to the State of Mississippi"
  return playlist;
}

function removeFromPlaylist() {
  delete playlist.Slowdive;
  return playlist;
}
