
function updatePlaylist(playlist, artistName, songTitle){
  return Object.assign({}, playlist, { [artistName]: songTitle })
}
var playlist={artistName:"Zaid Habash"}
playlist={songTitle:"Moon Light"}