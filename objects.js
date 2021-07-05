var playlist = {
  'John Mayer': 'Gravity',
  'Jimi Hendrix': 'Little Wing',
  'Stevie Ray Vaugn': 'Pride and Joy',
};

function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle;
  return playlist;
}

updatePlaylist(playlist, 'Steve Vai', 'For the Love of God')

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName];
  return playlist;
}

updatePlaylist(playlist, 'Steve Vai');
