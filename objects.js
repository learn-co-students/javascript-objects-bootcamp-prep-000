function destructivelyUpdateObjectWithKeyAndValue(obj, key, value) {
  obj[key] = value
 
  return obj
}
 
const recipe = { eggs: 3 }
 
destructivelyUpdateObjectWithKeyAndValue(recipe, 'flour', '3 cups')
// returns { eggs: 3, flour: '3 cups' }
 
// but also:
 
recipe // { eggs: 3, flour: '3 cups' }

function updateObjectWithObject(targetObject, updatesObject) {
  return Object.assign({}, targetObject, updatesObject)
}

var playlist = {hiphop : "musica",
                funk: "seguraessa"}
                
function updatePlaylist (playlist, artist, song) {
  
}