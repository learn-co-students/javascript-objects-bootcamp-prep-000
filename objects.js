var playlist={artistName:"Zaid Habash"}
function updatePlaylist(obj, key, value){
   
  obj[key] = value
   return obj
}

updatePlaylist(playlist,"songTitle","Moon Light")

function removeFromPlaylist(obj, key){
   
 return delete obj.key
}

removeFromPlaylist(playlist,"Slowdive")

