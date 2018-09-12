var playlist = {phish: "ChalkDust Torture",
                gratefulDead: "Bertha",
                primus: "Power Mad",
};

function updatePlaylist(playlist, artist, song){
  playlist [artist]=song;
  return playlist;
}
function removeFromPlaylist (playlist, artist){
  delete playlist[artist]
  return playlist;
}