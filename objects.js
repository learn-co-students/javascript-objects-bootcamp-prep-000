let playlist = {
  kanye: "flashing lights",
}

function updatePlaylist(playListObj, artist, songTitle)
{
  playListObj[artist] = songTitle;
  return playListObj;
}


function removeFromPlaylist(playListObj, artistName)
{
  delete playListObj[artistName];
  return playListObj;
}
