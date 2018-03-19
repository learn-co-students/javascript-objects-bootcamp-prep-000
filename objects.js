var playlist = {
  taylorSwift: 'Gorgeous',
  fallOutBoy: 'DanceDance',
  againstTheCurrent: 'LegendsNeverDie',
  weezer: 'BuddyHolly'
};

var updatePlaylist = function(obj,key, value) {
  obj[key] = value;
  
  return obj;
  
};

var removeFromPlaylist = function(obj, key) {
  delete obj[key];
  
  return obj;
};

updatePlaylist(playlist, 'Phil Ochs', 'Here\'s to the State of Mississippi');
removeFromPlaylist(playlist,'weezer');