var playlist = {
  stoneBoy: 'Putuu',
  sarkordie: 'Ofekgyor'
};


function updatePlaylist(playlist, artist, songTitle) {
  playlist[artist] = songTitle;
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName];
  return playlist;
}

