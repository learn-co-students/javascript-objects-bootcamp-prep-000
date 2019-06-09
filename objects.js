var playlist = {miguel: "girl with the tattoo", party: "break from toronto", frank: "nights", kanye: "saint pablo"}

function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle
  return playlist
}

function removeFromPlaylist(playlist, artistName) {
   delete playlist[artistName]
   return playlist
}