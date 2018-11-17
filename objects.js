//create an object playlist and initialize it with a key-value pair
const playlist = {};
playlist["Ariana Grande"] = "sweetener";

//define a function to update the playlist objects
function updatePlaylist(playlist, artistName, songTitle){
  return Object.assign(playlist, {[artistName]:songTitle});
};

//define a function that removes artists from the playlist object
function removeFromPlaylist(playlist, artistName){
  delete playlist[artistName];
}
