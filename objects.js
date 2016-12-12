var playlist = {falco: "Rock me Amaeus"}

function updatePlaylist(thePlayList, artistName, titleOfSong) {
  thePlayList[artistName] = titleOfSong
  return thePlayList
}

function removeFromPlaylist(thePlayList, artistName) {
  delete thePlayList[artistName]
  return thePlayList
}