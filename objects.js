var meals={ breakfast:"oatmeal" };
var meals = new Object({ breakfast: 'oatmeal'});
var meals = { 
    breakfast: 'eggs',
};
var playlist= new Object({
  ['artist']:'song title'
});
playlist.Slowdive= 'Alison';
playlist['My Bloody Valentine'] = 'Sometimes';

function updatePlaylist(playlist,artist,song) {
  playlist['Phil Ochs']="Here's to the State of Mississippi"; return playlist;
}
function removeFromPlaylist(playlist,artist){
  delete playlist.Slowdive;
  return playlist;
}