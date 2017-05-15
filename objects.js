var playlist = {
  Janis: 'Son of a preacher',
  Maroon5: 'Sugar'
};
function updatePlaylist (obj, key, value) {
  return Object.assign( {}, obj, { [key]: value })
}

updatePlaylist(playlist, 'hello', 'all');

function removeFromPlaylist(playlist, artist) {
 delete playlist[artist];
  return playlist;
}
