var playlist = {yearsnyears: "king", hasley: "americano", macholmore: "samelove"}

function updatePlaylist(playL, artistName, songTitle){
  playL[artistName] = songTitle
  return playL
}

function removeFromPlaylist(playL, artistName){
  delete playL[artistName]
  return playL
}
