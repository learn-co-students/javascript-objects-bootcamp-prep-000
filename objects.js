var meals= { breakfast: "oatmeal"};
var meals= new Object ({breakfast: 'oatmeal'});
function destructivelyUpdateObjectWithKeyAndValue(obj, key, value){
  obj[key]=value;
  return obj
}
const recipe = {eggs:3}

var playlist= {
  Odesza: "Boy", 
  theBeatles: "Let it be",
  bobMarley: "Could you be loved"
  }
  function updatePlaylist(playlist, artistName, songTitle){
    playlist[artistName]=songTitle;
    return playlist
  }
  function removeFromPlaylist(playlist, artistName){
    delete playlist[artistName];
    return playlist
  }