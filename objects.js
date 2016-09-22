var playlist = {jb : 'sorry', mj : 'earthsong', akon : 'ghetto'}


function updatePlaylist(playlist, el, insomniac)
{
  return Object.assign ({}, playlist, {[el] : insomniac})
}

function removeFromPlaylist(playlist, el)
{
 delete playlist.el;
 return playlist;
}
