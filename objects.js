var playlist = {
  'Elton John': 'Tiny Dancer',
  'Ed Sheeran': 'Galway Girl',
}
function updatePlaylist (playlist, name, title) {
  playlist[name] = title
  return playlist 
}

function removeFromPlaylist (playlist, name) {
delete playlist[name]
return playlist 
}