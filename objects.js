var playlist = { 'antonio vivaldi': 'the 4 seasons', 'seb bach': 'Allegro'};

function updatePlaylist(playlist, artist, song) {
  return Object.assign(playlist, {[artist] : song});
}

function removeFromPlaylist(playlist, artist){
  delete playlist[artist];
  return playlist;
}

// console.log(updatePlaylist(playlist, '1 2', 'its song'));
