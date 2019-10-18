var playlist = {
  GarthBrooks: "The Dance",
  AlanJackson: "Neon Rainbow",
  Alabama: "Roll On"
}

function updatePlaylist(playList, artistName, songTitle){
  return Object.assign({}, playList, {[artistName]: songTitle})
}

function removeFromPlaylist(playList, artistName){
  delete playList[artistName];
  return playList;
}
