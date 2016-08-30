var playlist = {
 usher:"you got it bad",
 "Michael Jackson":"speechless",
  DMX:"Get em Dog"

};

function removeFromPlaylist(myObject, name){
  delete myObject[name]
  return myObject
}

function updatePlaylist(myObject,name,title){
  myObject[name] = title;
  return myObject
}
