'use strict';

/**
 * 该函数确保给定的字符串具有指定的前缀。
 * @param s - 参数“s”是一个字符串，表示输入字符串。
 * @param prefix - “prefix”参数是一个要确保位于“s”字符串开头的字符串。
 * @returns 函数“str_ensure_prefix”返回一个字符串。
 */
function str_ensure_prefix(s, prefix) {
    return s.startsWith(prefix) ? s : `${prefix}${s}`;
}
/**
 * 该函数确保给定的字符串具有指定的前缀。
 * @public
 * @param s - 参数“s”是一个字符串，表示输入字符串。
 * @param prefix - “prefix”参数是一个要确保位于“s”字符串开头的字符串。
 * @returns 函数“str_ensure_prefix”返回一个字符串。
 */
function str_ensure_suffix(s, suffix) {
    return s.endsWith(suffix) ? s : `${s}${suffix}`;
}

exports.str_ensure_prefix = str_ensure_prefix;
exports.str_ensure_suffix = str_ensure_suffix;
