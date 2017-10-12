var playlist = {
  Logic: "All I Do",
  Adele: "Hello",
  Drake: "Fake Love"
};


function updatePlaylist (playlist, artistName, songTitle) {
  playlist[artistName] = songTitle;
  return playlist;
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist.Kanye;
  return playlist;
}
