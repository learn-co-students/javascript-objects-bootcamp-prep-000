var playlist = {}

function updatePlaylist(object , artistName, songTitle) {
  return Object.assign({}, object , { [artistName] songTitle })
}

function removeFromPlaylist(object ,artistName) {
  delete object[artistName]
  return object

}
