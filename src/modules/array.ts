

/**
 * 函数“arr_unique”接受一个数组作为输入，并返回一个删除了重复元素的新数组。
 * @param arr - 参数“arr”是一个“T”类型的数组。
 * @returns 函数“arr_unique”从输入数组“arr”返回唯一元素的数组。
 */
function arrUnique<T>(arr: T[]): T[] {
  return Array.from(new Set(arr))
}


/**
 * 函数“arr_unique”接受一个数组作为输入，并返回一个删除了重复元素的新数组。
 * @param arr - 参数“arr”是一个“T”类型的数组。
 * @returns 函数“arr_unique”从输入数组“arr”返回唯一元素的数组。
 */
function chunkArray<T>(array: T[], chunkSize: number): T[][] {
  const chunkedArray: T[][] = [];
  for (let i = 0; i < array.length; i += chunkSize) {
    const chunk = array.slice(i, i + chunkSize);
    chunkedArray.push(chunk);
  }
  return chunkedArray;
}


export {
  arrUnique,
  chunkArray
}
