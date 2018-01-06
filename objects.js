var playlist = {
  'Ghengis Khan': 'Capturing All of Asia and Thinking it Will Work'
};

function addSong(playlist, artist, songTitle) {
  if(playlist[artist] !== undefined) {
    if(Array.isArray(playlist[artist]) === true) {
      playlist[artist].push(songTitle);
      playlist[artist].sort();
    } else {
      playlist[artist] = [playlist[artist]];
      playlist[artist].push(songTitle);
      playlist[artist].sort();
    }
  } else {
    playlist[artist] = songTitle;
  }
  return playlist;
}

function updatePlaylist(playlist, artist, songTitle) {
  playlist[artist] = songTitle;
  return playlist;
}

function removeFromPlaylist(playlist, artist) {
  delete playlist[artist];
  return playlist;
}