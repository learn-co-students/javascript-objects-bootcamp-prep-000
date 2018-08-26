var playlist = {jackson: "beat it", williams: "happy", mercury: "under pressure"};
function updatePlaylist (Object, key, value) {
  Object[key] = value;
  return Object;
}
function removeFromPlaylist (Object, key) {
  delete Object[key];
  return Object;
}