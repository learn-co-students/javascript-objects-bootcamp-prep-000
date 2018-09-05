var playlist = { Kaskade: "Last Chance",
               Illenium: "Beautiful Creatres",
               Gryffin: "Tie Me down"
};

function updatePlaylist(playlist, artistName, songTitle){
  playlist[artistName] = 'songTitle';
  return playlist;
}

function removeFromPlaylist(playlist, artist){
  delete playlist[artist];
  return playlist;
}