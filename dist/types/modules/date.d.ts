/**
 * 函数“getEndOfCurrentDay”返回当天结束的时间戳。
 * @returns 当日结束的时间戳。
 */
declare function getEndOfCurrentDay(): number;
/**
 * 函数“getEndOfCurrentWeek”返回本周最后一天的时间戳。
 * @returns 本周最后一天的时间戳，时间设置为 23:59:59.999。
 */
declare function getEndOfCurrentWeek(): number;
/**
 * `padLeft` 函数在左侧填充指定字符或字符串的字符串或数字，直到达到指定长度。
 * @param {string | number} value - “value”参数可以是字符串或数字。它表示需要用零填充的值。
 * @param {number} num - “num”参数是结果字符串的所需长度。
 * @param {any} [pad] - `pad` 参数是一个可选参数，指定用于填充的字符或字符串。如果未提供“pad”，则默认值为“0”。
 * @returns 函数“padLeft”返回一个字符串，该字符串在左侧填充指定字符（默认为“0”）以达到指定长度。
 */
declare function padLeft(value: string | number, num: number, pad?: any): string;
/**
 * `padLeft` 函数在左侧填充指定字符或字符串的字符串或数字，直到达到指定长度。
 * @param {string | number} value - “value”参数可以是字符串或数字。它表示需要用零填充的值。
 * @param {number} num - “num”参数是结果字符串的所需长度。
 * @param {any} [pad] - `pad` 参数是一个可选参数，指定用于填充的字符或字符串。如果未提供“pad”，则默认值为“0”。
 * @returns 函数“padLeft”返回一个字符串，该字符串在左侧填充指定字符（默认为“0”）以达到指定长度。
 */
declare function formatDate(date: string | number | Date, format?: string): string;

export { formatDate, getEndOfCurrentDay, getEndOfCurrentWeek, padLeft };
