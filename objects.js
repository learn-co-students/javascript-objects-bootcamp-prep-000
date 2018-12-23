var playlist = {
  "My Bloody Valentine": "California Love",
};

function updatePlaylist(playlist, artistName, songTitle) {
 
  return Object.assign({}, playlist, { [artistName]: songTitle })
}
 

