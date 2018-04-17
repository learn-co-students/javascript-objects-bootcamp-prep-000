var playlist = { Eminem : 'Lose YourSelf' };

function updatePlaylist(aplaylist, artist, title) {
  aplaylist[artist] = title;
  return aplaylist
  
  //return Object.assign({}, playlist, {artist: title})
}

function removeFromPlaylist(aplaylist, artist) {
    delete aplaylist[artist];
    return aplaylist
}