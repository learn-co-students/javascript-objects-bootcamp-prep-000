var playlist = {
  artistName: "song1",
  artist2: "song2", 
  artist3: "song3"
};

function updatePlaylist (obj, name, song){
  obj[name] = song;
  return obj;
}

 function removeFromPlaylist(obj, name){
   delete obj[name];
   return obj;
 }