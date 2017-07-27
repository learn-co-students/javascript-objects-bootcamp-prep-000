var playlist = {Kanye: 'Stronger'};

function updatePlaylist (playlist, artistName, songTitle) {
  playlist[artistName] = songTitle;
  return playlist;
}
