export function generateColorFromNumber(number: number): string {
  let maxVal = 0xffffff; // 16777215
  let randomNumber = (number % maxVal).toString(16);
  let randColor = randomNumber.padStart(6, '0');
  return `#${randColor.toUpperCase()}`;

  //   let maxVal = 0xffffff; // 16777215
  //   let randomNumber = Math.random() * maxVal;
  //   randomNumber = Math.floor(randomNumber);
  //   randomNumber = randomNumber.toString(16);
  //   let randColor = randomNumber.padStart(6, 0);
  //   return `#${randColor.toUpperCase()}`;
}

export const randomColor = (): string => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};
