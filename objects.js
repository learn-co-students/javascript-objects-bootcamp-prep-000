var playlist = {artistName: 'songTitle'};

function updatePlaylist(aPLaylist, anArtistName, aSongTitle){
  aPLaylist[anArtistName] = aSongTitle
  return aPLaylist
}

function removeFromPlaylist(aPLaylist, anArtistName){
  delete aPLaylist[anArtistName]
  return aPLaylist
}
