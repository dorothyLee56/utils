
/**
 * “classNames”函数接受多个参数，并通过过滤掉任何非字符串参数并将任何对象的键与真实值连接起来，返回一个类名字符串。
 * @param {any} arg - `arg` 参数是一个剩余参数，允许您传入任何类型的多个参数。在这种情况下，它用于接受任意数量的参数。
 * @returns 函数“classNames”返回一个表示 CSS 类名列表的字符串。
 */
function classNames (...arg: any): string {
  let _class: string[] = [];
  for (const classname of arg) {
    if (typeof classname === 'string') {
      _class.push(classname);
    } else if (classname instanceof Object) {
      const classArr = Object.entries(classname)
        .filter((item) => item[1])
        .map((item) => item[0]);
      _class = _class.concat(classArr);
    }
  }
  return _class.join(' ');
};

export {classNames}