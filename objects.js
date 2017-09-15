var playlist = {
  playlist
};

function updatePlaylist(playlist, artistName, songTitle) {
  playlist["Phil Ochs"] = "Here's to the State of Mississippi";
  return Object.assign({}, playlist, updatePlaylist)
}

function removeFromPlaylist(playlist, artistName, songTitle) {
  delete playlist.Kanye;
  return playlist
}
