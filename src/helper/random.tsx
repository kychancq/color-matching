export const genRandomNum = (max: number) => {
  let random: number =  Math.floor(Math.random() * max);
  if(random == max) random--;
  return random;
}