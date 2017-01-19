var playlist = {
  Cher: 'Turn Back Time',
  Sting: 'Fields Of Gold',
  Genesis: 'Thats All'
}

function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName]=songTitle;
  return playlist
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName];
  return playlist
}
