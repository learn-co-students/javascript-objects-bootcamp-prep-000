var playlist = {Muse: 'Absolution'};

function updatePlaylist(playlist, artist, song) {
  // Cleaner method
  //playlist[artist] = song
  return Object.assign(playlist, {[artist]: song});
}

function removeFromPlaylist(playlist, artist) {
  return delete playlist[artist];
}