const minNum = 0;
const maxNum = 20;
const getRandomNum = (min = minNum, max = maxNum) => Math.floor(Math.random() * (max - min)) + min;

export default getRandomNum;
