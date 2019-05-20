var playlist = {"Internet": "Go With It",
                "Kendrick":"Humble",
                "Amy":"Half Time"};
function updatePlaylist(object,key,value) {
        object[key]=value
        return object;
}
function removeFromPlaylist(object,key) {
        delete object[key]
        return object;
}
