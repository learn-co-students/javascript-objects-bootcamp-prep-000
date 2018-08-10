var playlist = {'Lady Gaga' : 'Poker face'};

function updatePlaylist(pl, aname, title){
  pl[aname] = title
  return pl;
}

function removeFromPlaylist(pl, aname){
  delete pl[aname];
}