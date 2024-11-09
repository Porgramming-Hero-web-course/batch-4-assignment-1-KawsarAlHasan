function countWordOccurrences(sentence: string, word: string): number {
  const lowerCaseSentence = sentence.toLowerCase();
  const lowerCaseWord = word.toLowerCase();

  const words = lowerCaseSentence.split(" ");

  const count = words.filter((w) => w === lowerCaseWord).length;

  return count;
}

// input
console.log(countWordOccurrences("I love typescript", "typescript")); // Output: 1
console.log(
  countWordOccurrences(
    "I love TypeScript because TypeScript is awesome",
    "typescript"
  )
); // Output: 2
