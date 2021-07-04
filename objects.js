var playlist = {Nirvana: "Lithium",Foo_Fighters: "Learn_to_fly"};

function updatePlaylist(playlist,name,song){
  playlist[name] = song;
  return playlist;
}

function removeFromPlaylist(playlist,name){
 
  delete playlist[name];
  
  return playlist;
  
}