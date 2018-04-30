var playlist = {
  Tom: "Jingle",
  dick: "Bell",
  harry: "Rock"
};
function updatePlaylist(playlist, john, singalong){
  playlist[john] = singalong;
  return playlist
;}

function removeFromPlaylist(playlist, john){
  delete playlist[john];
  return playlist
;}