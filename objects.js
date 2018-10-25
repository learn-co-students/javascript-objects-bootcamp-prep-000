var playlist = {
  voidz:"Permanent High School",
  soko: "Diabolo Menthe",
  billyidol: "Dancing With Myself"
}

function updatePlaylist(playlist, artistName, songTitle){
  playlist[artistName] = songTitle
}

function removeFromPlaylist(playlist, artistName){
  delete playlist[artistName]
}
