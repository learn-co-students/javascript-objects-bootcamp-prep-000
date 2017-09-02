var playlist = {
  LinkinPart: 'Numb'
  LimpBizkit: 'Nookie'
  TheProdigy: 'Omen'
}

function updatePlaylist(obj,key,value){
  obj[key] = value
  return obj
}

updatePlaylist(playlist,'LimpBizkit','Behind Blue Eyes')
