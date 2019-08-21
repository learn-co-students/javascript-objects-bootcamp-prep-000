var playlist = {name: "title"};

function updatePlaylist (playlistObject, name, title) {
  return Object.assign ({}, playlistObject, {[name]: title })
}

function removeFromPlaylist (playlist, name) {
  delete playlist[name];
  return playlist
}
