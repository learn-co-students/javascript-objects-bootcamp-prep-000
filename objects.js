// creating an Object
var playlist = {'Micheal Jackson': 'Thriller',
                'Whitney Houston': 'The Bodyguard'};

function updatePlaylist(playlist, artistName, songTitle){
  playlist[artistName]=songTitle;
  return playlist.artistName;
  
}
function removeFromPlaylist(playlist, artistName){
  delete playlist[artistName];
  return playlist;

}