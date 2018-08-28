var playlist = {}
playlist.art1 = "song1";

function updatePlaylist(plylst, artst, sng){
  plylst[artst] = sng;
  return plylst;
}

function removeFromPlaylist(plylst, artst){
  delete plylst[artst];
  return plylst;
  
}