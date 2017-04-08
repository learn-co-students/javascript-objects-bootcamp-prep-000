var playlist={LinkinPark:"In the end",DhinchakPooja:"Swag wali topi"};

function updatePlaylist(playlist, artistName, songTitle)
{
  playlist.artistName=songTitle;
}

function removeFromPlaylist(playlist, artistName)
{
  delete playlist.artistName;
}
