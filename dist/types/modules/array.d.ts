/**
 * 函数“arr_unique”接受一个数组作为输入，并返回一个删除了重复元素的新数组。
 * @param arr - 参数“arr”是一个“T”类型的数组。
 * @returns 函数“arr_unique”从输入数组“arr”返回唯一元素的数组。
 */
declare function arrUnique<T>(arr: T[]): T[];
/**
 * 函数“arr_unique”接受一个数组作为输入，并返回一个删除了重复元素的新数组。
 * @param arr - 参数“arr”是一个“T”类型的数组。
 * @returns 函数“arr_unique”从输入数组“arr”返回唯一元素的数组。
 */
declare function arrayChunk<T>(array: T[], chunkSize: number): T[][];

export { arrUnique, arrayChunk };
