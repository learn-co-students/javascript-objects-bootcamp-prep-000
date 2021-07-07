const playlist = {Nirvana: "Smells Like Teen Spirit"};

var updatePlaylist = function(obj, artist, title){
  
  return obj[artist] = title;
  
};

var removeFromPlaylist = function(obj, artist){
   delete obj[artist];
};