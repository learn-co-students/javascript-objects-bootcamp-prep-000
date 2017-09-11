var playlist = {
  Radiohead: 'Weird Fishes/Arpeggi',
  Bonobo: 'El Toro',
  Shigeto: 'Detroit Part 1',
  'Flying Lotus': 'Coronus, the Terminator'
}

function updatePlaylist(playlist, artistName, songTitle){
  playlist[artistName] = songTitle;
  return playlist
}

function removeFromPlaylist(playlist, artistName){
  delete playlist[artistName];
  return playlist
}
