var playlist={artistName:"Zaid Habash"}
function updatePlaylist(obj, key, value){
   Object.assign({}, obj, { [key]: value })
   return obj
}

updatePlaylist(playlist,"songTitle","Moon Light")