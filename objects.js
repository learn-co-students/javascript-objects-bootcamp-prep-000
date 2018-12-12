var playlist = {MJ: 'Bad', GM: 'Faith'}

function updatePlaylist(playList, artist, song) {
  playList[artist] = song
}

function removeFromPlaylist(playList, artist) {
  delete playList[artist]
}
