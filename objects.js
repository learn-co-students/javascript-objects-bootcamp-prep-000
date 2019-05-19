function updatePlaylist(obj, artistName, songTitle) {
  // return Object.assign({}, obj, { [artistName]: songTitle });
  return Object.assign(obj, { [artistName]: songTitle }); // Mutates object

}

function removeFromPlaylist(obj, artistName) {
  return delete obj[artistName];
}

const playlist = new Object({ "Ying Yang Twins": "Get Low"});


// console.log(removeFromPlaylist(playlist, "Ying Yang Twins"));
// console.log(playlist);
