const bufferFromString = Buffer.from('ciao human');
const bufferFromArray = Buffer.from([12, 'as', 22, true]);
const bufferFromHex = Buffer.from('4369616f2068756d616e', 'hex')

console.log(bufferFromString);
console.log(bufferFromArray);
console.log(bufferFromHex)
