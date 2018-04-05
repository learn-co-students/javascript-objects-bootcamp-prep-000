var playlist={sam:"todaysong",test:"testsong"}

function updatePlaylist (obj,artname,songtitle)
{
  Object.assign({artname:songtitle})
  return playlist
}

function removeFromPlaylist(playlistobj,artistname)
{
 delete playlistobj.artistname;
  return playlistobj;
}