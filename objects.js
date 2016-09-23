var playlist = {mj : 'earthsong', el : 'insomniac', akon : 'ghetto'}

function updatePlaylist(playlist, shaggy, wazunme)
{
  return Object.assign({}, playlist, {[shaggy] : wazunme});
}

function removeFromPlaylist(playlist, mj)
{
  delete playlist[mj];
  return playlist;
}
