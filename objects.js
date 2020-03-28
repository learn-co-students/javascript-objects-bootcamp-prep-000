var playlist={artistName:"Zaid Habash"}
function updatePlaylist(obj, key, value){
   Object.assign({}, obj, { [key]: value })
   return obj
}

playlist={songTitle:"Moon Light"}