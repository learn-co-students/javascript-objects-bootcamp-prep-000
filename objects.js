var playlist = {
  Queen: "Don't Stop Me Now",
  Dadawa:"The Turning Scripture",
  Dido: "White Flag",
  Enrique: "hero",
  PereUbu: "Final Solution"
}
function updatePlaylist(playListObj,artistName,songTitle)
{
  playListObj[artistName]=songTitle;
  return playListObj;
}

function removeFromPlaylist(playListObj,artistName)
{
  delete playListObj[artistName];
  return playListObj;
}