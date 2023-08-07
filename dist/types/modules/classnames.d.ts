/**
 * “classNames”函数接受多个参数，并通过过滤掉任何非字符串参数并将任何对象的键与真实值连接起来，返回一个类名字符串。
 * @param {any} arg - `arg` 参数是一个剩余参数，允许您传入任何类型的多个参数。在这种情况下，它用于接受任意数量的参数。
 * @returns 函数“classNames”返回一个表示 CSS 类名列表的字符串。
 */
declare function classNames(...arg: any): string;

export { classNames };
