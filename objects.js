var playlist = {
  MichaelBuble: 'Home',
  FrankSinatra: 'Young at Heart'
}
function updatePlaylist(obj, key, value) {
  obj[key] = value
  return obj
}
function removeFromPlaylist(playlistObject, artistName) {
  delete playlist[artistName]
  return playlist
}