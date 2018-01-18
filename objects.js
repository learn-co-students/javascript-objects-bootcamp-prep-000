var playlist={abc:"abc1",
              def:"def1"
              }
var artistname="ghi";
var  songtitle="ghi1";
function updatePlaylist(playlist, artistname,songtitle){
  playlist[artistname]=songtitle;
  return playlist;
}

function removeFromPlaylist(playlist, artistname){
  delete playlist[artistname];
  return playlist;
}