var playlist = {'Kanye': 'Gold Digger'};

function updatePlaylist (obj, key, value){
  obj[key] = value

  return obj
}

function removeFromPlaylist (playList, artistName) {
  delete playList[artistName]

  return playList
}
