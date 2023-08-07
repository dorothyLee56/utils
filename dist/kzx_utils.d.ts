/**
 * 函数“arr_unique”接受一个数组作为输入，并返回一个删除了重复元素的新数组。
 * @param {T[]} arr - 参数“arr”是一个“T”类型的数组。
 * @returns 函数“arr_unique”从输入数组“arr”返回唯一元素的数组。
 */
export declare function arr_unique<T>(arr: T[]): T[];

/**
 * “classNames”函数接受多个参数，并通过过滤掉任何非字符串参数并将任何对象的键与真实值连接起来，返回一个类名字符串。
 * @param {any} arg - `arg` 参数是一个剩余参数，允许您传入任何类型的多个参数。在这种情况下，它用于接受任意数量的参数。
 * @returns 函数“classNames”返回一个表示 CSS 类名列表的字符串。
 */
export declare function classNames(...arg: any): string;

/**
 * `padLeft` 函数在左侧填充指定字符或字符串的字符串或数字，直到达到指定长度。
 * @param {string | number} value - “value”参数可以是字符串或数字。它表示需要用零填充的值。
 * @param {number} num - “num”参数是结果字符串的所需长度。
 * @param {any} [pad] - `pad` 参数是一个可选参数，指定用于填充的字符或字符串。如果未提供“pad”，则默认值为“0”。
 * @returns 函数“padLeft”返回一个字符串，该字符串在左侧填充指定字符（默认为“0”）以达到指定长度。
 */
export declare function formatDate(date: string | number | Date, format?: string): string;

/**
 * 该函数检查给定值是否是有限数。
 * @param {any} n - 参数“n”可以是任何类型的值。
 * @returns 一个布尔值。
 */
export declare function is_number(n: any): n is number;

/**
 * 该函数检查给定值是否是对象而不是数组。
 * @param {any} o - 参数“o”的类型为“any”，这意味着它可以是任何数据类型。
 * @returns 一个布尔值。
 */
export declare function is_object(o: any): o is Exclude<object, Array<any>>;

/**
 * 加载css文件
 */
/**
 * `loadCss` 函数用于从给定的 URL 动态加载 CSS 文件，并返回一个 Promise，该 Promise 在 CSS 文件成功加载时解析，如果出现错误则拒绝。
 * @param {string} url - `url` 参数是一个字符串，表示要加载的 CSS 文件的 URL。
 * @returns 函数“loadCss”返回一个 Promise。
 */
export declare function loadCss(url: string): Promise<any>;

/**
 * 加载脚本文件
 */
/**
 * `loadScript` 函数用于从给定 URL 异步加载脚本，并返回一个在脚本完成加载时解析的 Promise。
 * @param {string} url - `url` 参数是一个字符串，表示要加载的脚本的 URL。
 * @returns 函数“loadScript”返回一个 Promise。
 */
export declare function loadScript(url: string): Promise<any>;

/**
 * `padLeft` 函数在左侧填充指定字符或字符串的字符串或数字，直到达到指定长度。
 * @param {string | number} value - “value”参数可以是字符串或数字。它表示需要用零填充的值。
 * @param {number} num - “num”参数是结果字符串的所需长度。
 * @param {any} [pad] - `pad` 参数是一个可选参数，指定用于填充的字符或字符串。如果未提供“pad”，则默认值为“0”。
 * @returns 函数“padLeft”返回一个字符串，该字符串在左侧填充指定字符（默认为“0”）以达到指定长度。
 */
export declare function padLeft(value: string | number, num: number, pad?: any): string;

/**
 * 该函数确保给定的字符串具有指定的前缀。
 * @param {string} s - 参数“s”是一个字符串，表示输入字符串。
 * @param {string} prefix - “prefix”参数是一个要确保位于“s”字符串开头的字符串。
 * @returns 函数“str_ensure_prefix”返回一个字符串。
 */
export declare function str_ensure_prefix(s: string, prefix: string): string;

/**
 * 该函数确保给定的字符串具有指定的前缀。
 * @public
 * @param s - 参数“s”是一个字符串，表示输入字符串。
 * @param prefix - “prefix”参数是一个要确保位于“s”字符串开头的字符串。
 * @returns 函数“str_ensure_prefix”返回一个字符串。
 */
export declare function str_ensure_suffix(s: string, suffix: string): string;

export { }
