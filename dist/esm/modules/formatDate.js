/**
 * `padLeft` 函数在左侧填充指定字符或字符串的字符串或数字，直到达到指定长度。
 * @param {string | number} value - “value”参数可以是字符串或数字。它表示需要用零填充的值。
 * @param {number} num - “num”参数是结果字符串的所需长度。
 * @param {any} [pad] - `pad` 参数是一个可选参数，指定用于填充的字符或字符串。如果未提供“pad”，则默认值为“0”。
 * @returns 函数“padLeft”返回一个字符串，该字符串在左侧填充指定字符（默认为“0”）以达到指定长度。
 */
function padLeft(value, num, pad) {
    let result = value + '';
    while (result.length < num) {
        result = (pad || '0') + result;
    }
    return result;
}
/**
 * `padLeft` 函数在左侧填充指定字符或字符串的字符串或数字，直到达到指定长度。
 * @param {string | number} value - “value”参数可以是字符串或数字。它表示需要用零填充的值。
 * @param {number} num - “num”参数是结果字符串的所需长度。
 * @param {any} [pad] - `pad` 参数是一个可选参数，指定用于填充的字符或字符串。如果未提供“pad”，则默认值为“0”。
 * @returns 函数“padLeft”返回一个字符串，该字符串在左侧填充指定字符（默认为“0”）以达到指定长度。
 */
function formatDate(date, format = 'Y-m-d H:i') {
    if (!date)
        return '';
    if (typeof date === 'number') {
        const n = date.toString().length;
        if (n === 10)
            date *= 1000;
        date = new Date(date);
    }
    if (typeof date === 'string') {
        if (date.length === 10)
            date += '000';
        date = parseInt(date);
        date = new Date(date);
    }
    return format
        .replace(/Y/g, padLeft(date.getFullYear(), 4))
        .replace(/m/g, padLeft(date.getMonth() + 1, 2))
        .replace(/d/g, padLeft(date.getDate(), 2))
        .replace(/H/g, padLeft(date.getHours(), 2))
        .replace(/i/g, padLeft(date.getMinutes(), 2))
        .replace(/s/g, padLeft(date.getSeconds(), 2));
}

export { formatDate, padLeft };
