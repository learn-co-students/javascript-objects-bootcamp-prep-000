var playlist = { fleetFoxes: 'Montezuma' }
function updatePlaylist(object, artist, song) {
  Object.assign(object, { [artist]: song })
  return object;
}
function removeFromPlaylist(object, artist) {
  delete object[artist];
  return object;
}
