let playlist = {
  'artistName': 'songTitle'
}

function updatePlaylist(playList, artistName, songTitle) {
  playList[artistName] = songTitle
  return playList
}

function removeFromPlaylist (playList, artistName) {
  delete playList[artistName]
}