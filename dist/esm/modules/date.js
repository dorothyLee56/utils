/**
 * 函数“getEndOfCurrentDay”返回当天结束的时间戳。
 * @returns 当日结束的时间戳。
 */
function getEndOfCurrentDay() {
    const nowTime = Date.now();
    const year = new Date(nowTime).getFullYear();
    const month = new Date(nowTime).getMonth();
    const day = new Date(nowTime).getDate();
    return new Date(year, month, day + 1).getTime();
}
/**
 * 函数“getEndOfCurrentWeek”返回本周最后一天的时间戳。
 * @returns 本周最后一天的时间戳，时间设置为 23:59:59.999。
 */
function getEndOfCurrentWeek() {
    const now = new Date();
    const dayOfWeek = now.getDay();
    const diff = dayOfWeek === 0 ? 6 : dayOfWeek - 1; // 0表示周日，所以如果是周日，则取6，否则减去1
    const lastDayOfWeek = new Date(now.getTime() + (6 - diff) * 24 * 60 * 60 * 1000); // 本周最后一天（周日）
    lastDayOfWeek.setHours(23, 59, 59, 999); // 设置时间为当天的最后时间
    return lastDayOfWeek.getTime();
}
/**
 * `padLeft` 函数在左侧填充指定字符或字符串的字符串或数字，直到达到指定长度。
 * @param value - “value”参数可以是字符串或数字。它表示需要用零填充的值。
 * @param num - “num”参数是结果字符串的所需长度。
 * @param [pad] - `pad` 参数是一个可选参数，指定用于填充的字符或字符串。如果未提供“pad”，则默认值为“0”。
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

export { formatDate, getEndOfCurrentDay, getEndOfCurrentWeek, padLeft };
