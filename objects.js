var playlist = new Object({ Fleet : 'Dreams'});

function updatePlaylist(p, artist, song){
  return Object.assign({}, p, { [artist]: song})
}

function removeFromPlaylist(p, artist){
  delete p.artist

  return p
}
