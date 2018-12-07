var playlist = {
  burzum: 'Spell of Destruction',
  darkthrone: 'In The Shadow of The Horns',
  mayhem: 'Death Crush'
};

function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle;
  return playlist;
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName];
  return playlist;
}
