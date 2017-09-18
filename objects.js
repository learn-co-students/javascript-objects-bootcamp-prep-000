var playlist = new Object({ ISIS: 'Carry' })

function updatePlaylist(palylist,artist_name,title){
  palylist[artist_name] = title;
  return palylist
}

function removeFromPlaylist(playl,artist_name){
  delete playl[artist_name];
  return playl
}
