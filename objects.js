var playlist={adel:"skyfall"};

/*playlist={adel:"skyfall", Slowdive:"Alison", MyBloodyValentine:"Sometimes", PhilOchs:"Here's to the State of Mississippi" };*/
  function updatePlaylist(Object, artistName, songTitle){
    Object[artistName]=songTitle
    return Object
  };
  updatePlaylist(playlist, Slowdive, Alison)
  
 function removeFromPlaylist(Object, artistName){
   delete Object[artistName]
   return Object
 }

