var playlist = { LDR: "White Mustang" }

var playlist = {
  Alison: "Slowdive",
  Sometimes: "My Bloody Valentine"
}

function updatePlaylist(playlist, artistName, songTitle) {
  playlist["Phil Ochs"] = "Here's to the State of Mississippi";
}

function removeFromPlaylist(playlist, Slowdive) {
  
  delete playlist.Slowdive;
  
  return playlist
  
}