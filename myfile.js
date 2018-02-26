//testing my code

var empDetails = {1:'emp1'}

var copy = Object.assign({2:'emp2'},{3:'emp3', 3:'emp4'})
console.log(copy)
// ♥ nodejs myfile.js
//{ '2': 'emp2', '3': 'emp4' }

 copy = Object.assign({}, empDetails, {2:'emp2'},{3:'emp3', 3:'emp4'},{5:'sam'})
 console.log(copy)
 // ♥ nodejs myfile.js
//{ '2': 'emp2', '3': 'emp4' }
//{ '1': 'emp1', '2': 'emp2', '3': 'emp4' ,'5': 'sam'}

delete copy['2']
console.log(copy)