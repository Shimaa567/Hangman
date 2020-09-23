const getPuzzle = async wordCount => {
  const response = await fetch(
    `https://puzzle.mead.io/puzzle?wordCount=${wordCount}`
  );
  if (response.status === 200) {
    const data = await response.json();
    return data.puzzle;
  } else {
    throw new Error("Unable to fetch data");
  }
};

// Promise Chaining
const getPuzzleOld = wordCount => {
  return fetch(`https://puzzle.mead.io/puzzle?wordCount=${wordCount}`).then(
    response => {
      if (response.status === 200) {
        return response.json();
      } else {
        throw new Error("Unable to fetch data");
      }
    }
  );
};

export { getPuzzle as default };
