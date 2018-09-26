var playlist = {'Slowdive' : 'Alison', 'My Bloody Valentine' : 'Sometimes'};

function updatePlaylist(obj, name, title){
  
  obj[name] = title;
  return obj;
  
}


updatePlaylist(playlist, 'Phil Ochs', 'Heres to the State of Mississippi');


function removeFromPlaylist(obj, name){
  
  delete obj[name];
  return obj;
  
}


removeFromPlayList(playlist, "Slowdive");
