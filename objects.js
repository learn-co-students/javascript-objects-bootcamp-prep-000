var playlist = { 'Joe Dassin': 'A Paris en velo'};

function updatePlaylist(playlist, artist, song) {
  playlist[artist] = song;
  return playlist;
}

function removeFromPlaylist(playlist, artist, song) {
  if (delete playlist[artist]) {
    delete playlist[artist];
  } else {
    console.log('can not delete ${artist} from ${playlist}');
  }
  return playlist;
}
// note: learn does not work on my console, so I can not test