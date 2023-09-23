export const getRandomNumber = (min: number, max: number): number => {
  // Generate a random decimal number between 0 and 1
  const randomDecimal = Math.random();

  // Scale the random decimal to fit within the desired range
  const randomNumber = min + randomDecimal * (max - min + 1);

  // Use Math.floor() to make it an integer within the range
  return Math.floor(randomNumber);
};

// Usage example
// const randomNum = getRandomNumber(10, 50);
