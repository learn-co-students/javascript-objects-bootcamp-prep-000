var playlist={'Eli Sostre':"Someone Like You",'Amir Obe':"NATURALLY",'6lack':"Worst Luck"};
function updatePlaylist(obj,key,variable){
 return Object.assign({},obj,{[key]:variable});
}
function removeFromPlaylist(obj,key){
  delete obj[key];
  return obj;
}