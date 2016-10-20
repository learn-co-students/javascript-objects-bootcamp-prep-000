var playlist = {prince: "purple rain"};

function updatePlaylist(playlist, name, title) {
  playlist[name] = title
  return playlist
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist['Kanye'];
  return playlist
}
