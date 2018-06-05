var playlist = {'Frank Ocean': 'Pink & White'}

function updatePlaylist(pL, artistName, songTitle) {
  
  pL[artistName] = songTitle;
  return pL
  
}

function removeFromPlaylist(pL, artistName){
  
  delete pL[artistName]
  
}