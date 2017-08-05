//var meals = {}; //literal object

//var meals = new Object();

var playlist = {artistname: "songtitle"};

//key names, value title
//key names, value title
function updatePlaylist(obj,key,value){

//return Object.assign({},object,{[key]:value})
obj[key] = value
return obj
}

function removeFromPlaylist(obj,key){
  //delete playlist.key;
delete obj[key]
return obj
//var playlist2 = delete object.key;
//return playlist2
}
