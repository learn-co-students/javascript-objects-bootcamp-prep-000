var playlist = { metallica: "enter the sandman",
                 spoon: " the underdog",
                 incubus: "drive"
};

function updatePlaylist( playlist, artistName, songTitle) {
  playlist[artistName] = songTitle
  return playlist;
}

function removeFromPlaylist(playlist, artistName, songTitle) {
  delete playlist[artistName];
  return playlist;
}
