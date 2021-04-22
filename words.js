import { createReadStream } from 'fs';
import countWords from './count-words.js';

const src = createReadStream(process.argv[2], { encoding: 'utf-8' });

countWords(src).then(console.log);
