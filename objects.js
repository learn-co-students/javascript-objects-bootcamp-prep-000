
var playlist ={BillieEilish: "ocean eyes", Rusko: "Hold On"}
function updatePlaylist(playlist, Kiiara, Feels){
  playlist[Kiiara]=Feels
  return playlist
}
function removeFromPlaylist(playlist, Rusko){
  delete playlist[Rusko]
  return playlist
}