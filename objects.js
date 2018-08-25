var playlist = {wool:'Riot',pollack:'blue poles'};

function updatePlaylist(PL,name,title){
  PL[name] = title;
  return PL;
}

function removeFromPlaylist(PL,name){
  delete PL[name];
  return PL;
}