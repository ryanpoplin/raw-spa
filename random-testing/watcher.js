// Some Node.js

const fs = require('fs');
fs.watch('target.txt', function() {
	console.log('File \'target.txt\' has been edited...');
});
console.log('Now watching target.txt...');

