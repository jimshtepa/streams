import { create } from 'domain';
import { createReadStream, createWriteStream } from 'fs';

const [, , src, dest] = process.argv;

const srcStream = createReadStream(src);
const destStream = createWriteStream(dest);

srcStream.on('data', (chunk) => destStream.write(chunk));
