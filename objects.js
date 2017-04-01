

var playlist = { "testArtistName": "testSongTitle"}

function updatePlaylist(playList, artistName, songTitle) {
  var updatedPlaylist = Object.assign({}, playList, { [artistName]: songTitle })
  return updatedPlaylist
} 

function removeFromPlaylist(playList, artistName) {
  delete playList[artistName]
  return playList
}