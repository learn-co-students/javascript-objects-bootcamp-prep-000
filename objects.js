var playlist = {
Olamide: "Wo!",
Davido: "If"
};

function updatePlaylist(playlist, artist, songtitle){
  Object.assign({}, playlist,{Wizkid: "kana"})
}
function removeFromPlaylist(playlist, artistName){
  delete playlist.artistName
}