var playlist  = {
  Metallica: ['Nothing Else Matters', 'Fade To Black']
}

function updatePlaylist(argPlayList, argArtistName, argSongTitle) {
  argPlayList[argArtistName] = argSongTitle
  return argPlayList
}

function removeFromPlaylist(argPlayList, argArtistName) {
  delete argPlayList[argArtistName]
  return argPlayList
}
