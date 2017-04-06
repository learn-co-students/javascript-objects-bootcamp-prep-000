var playlist = {Muramasa: "Lovesick", Nujabes: "Aruarian Dance", Ljones: "Nakanaide"}
function updatePlaylist(playlist,artist,trackname) {
  playlist[artist] = trackname;
  return playlist;
} function removeFromPlaylist(object, key) {
  delete object[key];
  return object;
}
