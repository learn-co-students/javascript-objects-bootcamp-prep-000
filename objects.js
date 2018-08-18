var playlist = {
  disney: "Go the Distance",
  philCollins: "Strangers Like Me",
  moana: "How Far I'll Go"
};

function updatePlaylist(playlist, artistName, songTitle){
  return playlist[artistName] = songTitle;
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName];
  return playlist;
}