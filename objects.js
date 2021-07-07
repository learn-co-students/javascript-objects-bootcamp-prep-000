var playlist = { "Barry Manilow": "Can\'t Smile Without You" };
//console.log(playlist);

function updatePlaylist(playlist, artistName, songTitle) {
   return Object.assign(playlist, {[artistName]: songTitle})
}
    
//console.log(updatePlayList(playlist, 'Bonzo', 'Can-Can'))


function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName];
  return playlist;
}

//console.log(playlist);