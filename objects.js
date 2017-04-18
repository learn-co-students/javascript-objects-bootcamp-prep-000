var playlist = {
  DMB: "Crash",
  Radiohead: "Creep",
  Phish: "Waste"
};

function updatePlaylist(playlist, artistName, songTitle) {
playlist["Phil Ochs"] = "Here's to the State of Mississippi"
return playlist
}

function updatePlaylist(playlist, artist, song) {
  playlist[artist] = song
  return playlist
}

function removeFromPlaylist(playlist, artist) {
  delete playlist[artist];
  return playlist
}