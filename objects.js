var playlist = {artist: 'songTitle'};

function updatePlaylist(obj, artName, songName){
  playlist = Object.assign(obj[artName] = songName);
  return obj;
}

function removeFromPlaylist(obj, artName){
    delete obj[artName];
    return obj;
}
