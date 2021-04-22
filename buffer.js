const a = Buffer.from('Hello');
const b = Buffer.from('Hello 👻');
const c = Buffer.from('👻');

console.log(a.length);
console.log(b.length);
console.log(c.length);

console.log(a.toString('hex'));
