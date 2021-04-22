export default async function countWords(srcStream) {
  let lastWordsFromPreviousChunk = '';
  let numWords = 0;

  for await (const chunk of srcStream) {
    const words = (lastWordsFromPreviousChunk + chunk.toString()).split(/\s+/);
    lastWordsFromPreviousChunk = words.pop();
    numWords += words.length;
  }

  if (lastWordsFromPreviousChunk) {
    numWords += lastWordsFromPreviousChunk.split(/\s+/).length;
  }

  return numWords;
}
