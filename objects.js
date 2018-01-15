var playlist = {Bethel: "Colors", Lecrae: "Beautiful Feet"};

var updatePlaylist = function(obj, key, value){
  return Object.assign({}, obj, {[key]: value});
}

var removeFromPlaylist = function(play, Kanye){
  delete play.Kanye;
  return play;
}