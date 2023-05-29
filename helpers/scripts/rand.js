function rand(min, max, shold = 0.5) {
  const totalOptions = max - min + 1;
  const randomValue = Math.random();

  if (randomValue < shold) {
    return Math.floor(randomValue * (totalOptions / 2)) + min;
  } else {
    return (
      Math.floor(randomValue * (totalOptions / 2)) +
      Math.ceil(totalOptions / 2) +
      min -
      1
    );
  }
}
module.exports = rand;
