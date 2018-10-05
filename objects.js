 function updateObjectWithKeyAndValue(obj, key, value) {
   console.log(Object.assign({}, obj, { [key]: value }));
 }
 
 const recipe = { eggs: 3 };
 
 //updateObjectWithKeyAndValue(recipe, 'chocolate', '1 cup');
 
 //console.log(recipe);
 
 var targetObject = {
   '16th': 'Newfoundland',
   '17th': 'Cuba',
   '18th': 'Groucho Marx',
   '19th': 'Mindanao'
 }
 
 var updatesObject = {
   '18th': 'Iceland',
   '20th': 'Ireland'
 }
 
 function updateObjectWithObject(targetObject, updatesObject) {
   console.log(Object.assign({}, targetObject, updatesObject));
 }
 
 //updateObjectWithObject(targetObject, updatesObject);
 //console.log(targetObject);
 //delete targetObject['18th'];
 //console.log(targetObject);
 
 
 var playlist = {
   'Steely Dan': 'Bad Sneakers',
   'Elvis Costello': 'Less Than Zero'
 }
 
 function updatePlaylist(obj, key, value) {
   return(obj[key] = value);
 }
 
 updatePlaylist(playlist, 'Jackson Browne', 'Rock Me on the Water');
 
 console.log(playlist);
 
 function removeFromPlaylist(obj, key) {
   delete obj[key];
   return obj;
 }
 
 removeFromPlaylist(playlist, 'Jackson Browne');
 
 console.log(playlist);
 