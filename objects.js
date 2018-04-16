var playlist = {
revivalist : "When I was Young",
johnlegend: "PDA",
bobmarley: "redemption song", };

function updatePlaylist(playlist, artist, song) {
  playlist[artist] = 'song'
  return playlist }
  
function removeFromPlaylist(playlist, artist){
delete playlist[artist]
return playlist;}