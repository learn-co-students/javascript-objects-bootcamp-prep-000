var playlist={Django:'My Sweet', Jimmy:"Undecided"}
updatePlaylist(playlist,'Fappy','Lavende')
removeFromPlaylist(playlist,"Jimmy")
console.log(playlist)

function updatePlaylist(obj,key,value){
  playlist[key]=value
}

function removeFromPlaylist(obj,key){
  console.log(obj,key)
  delete obj[key]
  return obj
}