
var playlist = {
 
     artistName1:"Slowdive",
	   songTitle1:"Allison",
     artistName2:'My Bloody Valentine',
     songTitle2:'Sometimes,' 

};

 
function updatePlaylist(playlist, artistName3, songTitle3) {
playlist[artistName3] = "Phil Buchs"; 
playlist[songTitle3] ="Here's to the State of Mississipi";

   return playlist;
}
console.log(playlist)

function removeFromPlaylist(playlist, artistName1, songTitle) {
  delete playlist.Slowdive;
  delete playlist.Allison;
  
  return playlist;
  
}