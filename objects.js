var playlist={};
var playlist={"johncoltrane":'Impressions'};

function updatePlaylist (playlist, artistname, songtitle)  {
 playlist[artistname]=songtitle; 
}

function removeFromPlaylist (playlist, artistname){
  delete playlist[artistname];
  }