import { readFile, writeFile } from 'fs/promises';

const profile = setInterval(() => {
  console.error(
    `${(process.memoryUsage().arrayBuffers / 1024 / 1024)
      .toFixed(4)
      .padStart(10)} Mb`
  );
}, 100);

async function copyFile(src, dest) {
  const content = await readFile(src);
  return writeFile(dest, content);
}

const [, , src, dest] = process.argv;

copyFile(src, dest)
  .then(() => console.log(`${src} copied into ${dest}`))
  .catch((err) => {
    console.error(err);
    process.exit(1);
  })
  .finally(() => clearInterval(profile));
