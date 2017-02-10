var playlist = { 'Adele': 'Hello'};

function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle; // add song and artists as a key-value pair to playlist
  return playlist; // return whole playlist
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName]; // delete the key-value pair from the playlist
  return playlist; // return the updated playlist.
}
