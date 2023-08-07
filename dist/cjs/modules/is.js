'use strict';

/**
 * 该函数检查给定值是否是对象而不是数组。
 * @param {any} o - 参数“o”的类型为“any”，这意味着它可以是任何数据类型。
 * @returns 一个布尔值。
 */
function is_object(o) {
    return o !== null && typeof o === 'object' && !Array.isArray(o);
}
/**
 * 该函数检查给定值是否是有限数。
 * @param {any} n - 参数“n”可以是任何类型的值。
 * @returns 一个布尔值。
 */
function is_number(n) {
    return typeof n === 'number' && isFinite(n);
}

exports.is_number = is_number;
exports.is_object = is_object;
