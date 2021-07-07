var playlist = new Object({artist:"Oneida",title:"Sheets"});

function updatePlaylist (pl, a, t){
  Object.assign(pl,{[a]:t})
  return pl
}

function removeFromPlaylist(pl, a){
  delete (pl[a])
  return pl
}