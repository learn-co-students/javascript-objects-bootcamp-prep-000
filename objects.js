var playlist = {singer1 :"singerA", singer2: "singerB"}

function updatePlaylist(playlist, artistName, songTitle){
  return Object.assign ({ },
  playlist, {[artistName] : songTitle})
}

function removeFromPlaylist(playlist, artistName) {
   delete playlist[artistName];
    return playlist
}