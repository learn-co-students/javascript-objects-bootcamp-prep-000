var playlist = {
  brunoMars : "Magic",
  europe: "Final Countdown",
  nSync: "Bye Bye Bye"
};

function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle;
  return playlist
}

function removeFromPlaylist(playlist, artistName) {
    delete playlist[artistName];
    return playlist
}