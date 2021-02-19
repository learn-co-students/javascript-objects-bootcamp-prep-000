var playlist = {
	RHCP: "Californication"
}

function updatePlaylist(obj, name, song){
	var result = Object.assign({}, obj, {[name]: song})
	return result
}

function removeFromPlaylist(obj, name){
	delete obj[name];
	return obj
}
