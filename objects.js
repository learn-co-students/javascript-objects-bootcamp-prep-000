var playlist={Test1:"I want you",Test2:"Baby come back", Test3:"Please forgive me", Test4: "Give me another chance"}
function updatePlaylist(playlist,artist,song) {
  playlist[artist]=song
  return playlist
}

function removeFromPlaylist(playlist,artist) {
  delete playlist.Test1;
  return playlist
}