/**
 * 该函数确保给定的字符串具有指定的前缀。
 * @param {string} s - 参数“s”是一个字符串，表示输入字符串。
 * @param {string} prefix - “prefix”参数是一个要确保位于“s”字符串开头的字符串。
 * @returns 函数“str_ensure_prefix”返回一个字符串。
 */
function str_ensure_prefix(s: string, prefix: string) {
  return s.startsWith(prefix) ? s : `${prefix}${s}`
}

/**
 * 该函数确保给定的字符串具有指定的前缀。
 * @public
 * @param s - 参数“s”是一个字符串，表示输入字符串。
 * @param prefix - “prefix”参数是一个要确保位于“s”字符串开头的字符串。
 * @returns 函数“str_ensure_prefix”返回一个字符串。
 */
function str_ensure_suffix(s: string, suffix: string) {
  return s.endsWith(suffix) ? s : `${s}${suffix}`
}


/**
 * 中文和全角为1个字符、英文和半角符号为0.5个字符计算，返回str的总长度
 * @param {String} str 字符串
 * @returns str的总长度
 */ 
function strLength (str) {
  let totalLength = 0;
  let list = str.split('');
  for (let i = 0; i < list.length; i++) {
    let s = list[i];
    
    if (/[\u0000-\u00ff]/g.test(s)) { //半角
      totalLength += 0.5;
    }  else if (/[A-Za-z]/g.test(s)) { // 英文
      totalLength += 0.5;
    } else if (/[\u4e00-\u9fa5]/g.test(s)) { // 中文  
      totalLength += 1;
    } else if (/[\uff00-\uffff]/g.test(s)) {  // 全角 
      totalLength += 1;
    } else {
      totalLength += 1;
    }
  }
  return totalLength;
}


export {
  str_ensure_prefix,
  str_ensure_suffix,
  strLength,
}
