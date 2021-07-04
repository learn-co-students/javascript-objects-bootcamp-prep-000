var playlist = {Kanye:'Gold Digger', ACDC: 'Highway to Hell' };

function updatePlaylist(playlist, artistName, songtitle)
{
  return Object.assign({}, playlist, {[artistName]:songtitle});
}

function removeFromPlaylist (playlist, Kanye)
{
 delete playlist.Kanye;
 return playlist;
}
