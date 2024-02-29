export const moveZerosUtil = (arr: any[]): any[] => {
  let numberZeros = 0;

  const filteredArr = arr.filter((el) => {
    const isZero = Number(el) === 0;
    if (isZero) {
      numberZeros++;
    }
    return !isZero;
  });

  const arrZeros = new Array(numberZeros).fill(0);
  return filteredArr.concat(arrZeros);
};
