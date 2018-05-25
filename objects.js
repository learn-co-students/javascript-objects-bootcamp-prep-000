var playlist = {Beattles:'Yellow Submarine', Queens: 'We are the Champion'};
function updatePlaylist(playlist, name, title) {
  playlist[name] = title;
  return playlist;
}

function removeFromPlaylist(playlist, name) {
  delete playlist[name];
  return playlist;
}