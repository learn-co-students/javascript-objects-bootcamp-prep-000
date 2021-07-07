var playlist = {
  'My Bloody Valentine': "Sometimes",
  'Slowdive': "Alison"
}
playlist['Phil Ochs']='Heres to the State of Mississippi';
function updatePlaylist(Object,name,title) {
return playlist
}
function removeFromPlaylist(name,title) {
delete playlist.Slowdive
return playlist
}