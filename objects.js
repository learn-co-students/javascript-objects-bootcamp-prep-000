var playlist = {
  MAGIC: 'Kiss Me'
}
function updatePlaylist(Playlist,Artist,Title) {
  Playlist[Artist] = Title
  return Playlist
}
function removeFromPlaylist(playlist,artistName) {
  delete playlist[artistName]
  playlist
}