var playObj={
  Michael:"Black and white",
  Robbie:"Christmas"
};
var playlist=Object.assign({},playObj);

function updatePlaylist(obj,nam,song){
obj[nam]=song;
return obj;
}
function removeFromPlaylist(obj, nam){
  delete obj[nam];
  return obj;
}
