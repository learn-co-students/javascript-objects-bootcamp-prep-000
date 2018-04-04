var playlist = {Asha:'dil',Alka:'kkhh'}

function updatePlaylist(obj,name,title){
  obj[name] = title
  console.log(obj)
  return obj
}

function removeFromPlaylist(obj,name) {
  delete obj[name];
  console.log(obj)
  return obj
}