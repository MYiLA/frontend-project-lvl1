const getRandomNum = (min = 0, max = 20) => {
  const minNum = Math.ceil(min);
  const maxNum = Math.floor(max);
  return Math.floor((Math.random() * (maxNum - minNum + 1)) + minNum);
};

export default getRandomNum;
