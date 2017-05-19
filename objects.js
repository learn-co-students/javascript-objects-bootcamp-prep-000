var playlist = {
  Madonna: 'Like a Virgin',
  Prince: 'Purple Rain',
  Nirvana: 'Smells Like Teen Spirit'
}

function updatePlaylist(playlist,artist,song) {
  playlist.artist = 'song';
  return playlist;
}
updatePlaylist(playlist,Beatles,'Yesterday');

function removeFromPlaylist(playlist,artist) {
  delete playlist.artist;
}
removeFromPlaylist(playlist,Prince);
