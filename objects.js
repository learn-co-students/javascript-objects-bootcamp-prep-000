var playlist = {arcticMonkeys:"505"};
function updatePlaylist(pList,name,title){
  pList[name]=title;
  return pList;
}
function removeFromPlaylist(pList,name){
  delete pList[name];
  return pList
}
