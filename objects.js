var artistName = "Kanye"
var playlist= {[artistName]: "songTitle"};

function updatePlaylist(object, key, value){
  object[key] = value;
  return object
}

function removeFromPlaylist(playlist, artistName)
{
  artistName= "Kanye"
delete playlist[artistName];
return playlist;
}
