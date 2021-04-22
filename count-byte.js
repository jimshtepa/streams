import { createReadStream } from 'fs';
import { resolve } from 'path';

async function counter(stream) {
  return new Promise((resolve, reject) => {
    let bytes = 0;
    stream.on('data', (chunk) => (bytes = bytes + chunk.length));
    stream.on('end', () => resolve(bytes));
    stream.on('error', (err) => reject(err));
  });
}

const [, , src] = process.argv;

const s = createReadStream(src);

counter(s).then(console.log);
