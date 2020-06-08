var playlist = {
['Slowdive']: "Alison",
['My Bloody Valentine']: "Sometimes"
};

function updatePlaylist(playlist, artistName, songTitle) {
  return Object.assign(playlist, { [artistName]: songTitle })

}

function removeFromPlaylist(playlist, artistName) {
 return delete playlist[artistName];
  
}

