var playlist = {}
playlist["Bruno"] = "Uptown Funk"
playlist["Lil Wayne"] = "Mirror On The Wall"
playlist["Tyler Thomas"] = "F.N.T.W"

console.log(playlist)

function updatePlaylist(playlist,artist,song){
  playlist[artist] = song
  return playlist
}

function removeFromPlaylist(playlist,artist){
  delete playlist[artist]
  return playlist
}