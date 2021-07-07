var playlist = {coldplay:'clocks'};

function updatePlaylist(playlist, artistName, songTitle){
  playlist[artistName] = songTitle;
  return playlist;
}

function removeFromPlaylist(playlist, artistName){
 playlist = {artistName: 'Gold Digger'}
 delete playlist.artistName;
 return playlist
}

