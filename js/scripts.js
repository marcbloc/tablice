var famaleNames = ['Magda', 'Ania', 'Gosia', 'Dominika'];
var maleNames = ['Tomasz', 'Maciej', 'Bernard', 'Marcin'];
var allNames = famaleNames.concat(maleNames);
var newName = 'Marian';

if (allNames.indexOf(newName) === -1 ) {
	allNames.push(newName);
} else {
	alert('Name exist');
}

console.log(allNames);