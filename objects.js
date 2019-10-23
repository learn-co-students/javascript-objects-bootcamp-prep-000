var playlist = new Object({breakfast: "granola"});
//var playlist = {george winston: "summer"};
//Object.assign({},playlist,{georgeWinston: "summer"})

function updatePlaylist(playlist, artistName, songTitle)
{
  return Object.assign({}, playlist, { [artistName]: songTitle })
}

function removeFromPlaylist(plist, artistName){
  delete plist[artistName];
  //playlist;
  return plist;
}
