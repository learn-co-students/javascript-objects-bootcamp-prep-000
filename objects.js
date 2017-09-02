var playList = {
	linkinPark: 'Numb',
	limpBizkit: 'Nookie',
	RHCP: "Wet Sand"
}

function updatePlaylist(obj, key, value){
	obj[key] = value
}

updatePlaylist(playList, 'theProdigy', 'Omen')

function removeFromPlaylist(obj,key){
	delete obj[key]
}

removeFromPlaylist(playList,'linkinPark')
