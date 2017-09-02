var playList = {
	linkinPark: 'Numb',
	limpBizkit: 'Nookie',
	RHCP: "Wet Sand"
}

function updatePlaylist(obj, key, value){
	obj[key] = value
	console.log(obj)
}
console.log(playList)
updatePlaylist(playList, 'theProdigy', 'Omen')

function removeFromPlaylist(obj,key){
	delete obj[key]
}

console.log(playList)

removeFromPlaylist(playList,'linkinPark')


console.log(playList)
