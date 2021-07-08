var playlist = { celinedion: 'my heart will go on', nhwuynh: 'chua co' }

function updatePlaylist(playlist, artistName, songTitle) {
  return Object.assign(playlist, { [artistName]: songTitle })
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName];
  return playlist
}
