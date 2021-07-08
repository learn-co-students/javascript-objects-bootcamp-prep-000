var playlist = {
  Ramones: "judy is a punk",
  Raveonettes: "Remember",
  Kanye: "Gold Digger"
}

function updatePlaylist(playlist, artistName, songTitle) {
   playlist['Phil Ochs'] = "Here's to the State of Mississippi";
   return playlist;
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist.Kanye;
  return playlist;
}
