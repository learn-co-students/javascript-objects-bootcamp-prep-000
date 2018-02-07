var playlist = {"Blue Man Group": "Shadows"}

function updatePlaylist (cList, artist, song){
  Object.assign(cList, {[artist]: song})
  return cList
}

function removeFromPlaylist(cList, artist){
  delete cList[artist]
  return cList
}