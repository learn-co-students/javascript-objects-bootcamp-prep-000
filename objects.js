// var playlist = {artistName: songTitle};
//var playlist = {artistName:};
var playlist = {artistName:"cheo"};
function updatePlaylist(playlist, artistName, songTitle)
{
  playlist[artistName] = songTitle;
  return playlist;
}

function removeFromPlaylist(playlist, artistName)
{
  delete playlist[artistName];

  return playlist;

}
