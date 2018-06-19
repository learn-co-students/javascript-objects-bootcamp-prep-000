var playlist = ({'Rogue':'Nemesis'},{'Kuuro':'Possession'},{'Stonebank':'Falling Sky'})

function updatePlaylist(playlist,artistName,songName) {
  playlist[artistName]=songName
  return playlist
}


function removeFromPlaylist(playlist,songName) {
  delete playlist[songName]
}