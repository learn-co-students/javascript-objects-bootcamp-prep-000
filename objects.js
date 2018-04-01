var playlist = { 
  eminem: "Kill You" , 
  badCompany: "Bad Company", 
  survivor: "Eye of the Tiger",
  beatles: "I'm So Tired"  
}

function updatePlaylist(list, name, title){
  
  return Object.assign(list, {[name]: title})
  
}

function removeFromPlaylist(list, name){
  
  delete list[name]
  return list
}