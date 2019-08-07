function destructivelyUpdateObjectWithKeyAndValue(obj, key, value){
  obj[key] = value
  
  return obj
}

const recipe = {eggs: 3}

destructivelyUpdateObjectWithKeyAndValue(recipe, 'flour', '3 cups')

var playlist = {artistName:['song titles']}

function updatePlaylist(obj, string, song){
  obj[string] = song
  
  return obj
}

function removeFromPlaylist(obj,string){
  delete obj[string]
  
  return obj
}