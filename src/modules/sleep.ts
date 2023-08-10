/**
 * “delay”函数返回一个承诺，该承诺会在指定的时间后解析并产生指定的结果。
 * @param {number} time - “time”参数是一个数字，表示“delay”函数在解析 Promise 之前应等待的时间（以毫秒为单位）。
 * @param {any} res - `res` 参数是在指定的 `time` 过后 Promise 将解析的值。
 * @returns 函数“delay”返回一个 Promise，该 Promise 在指定的“time”延迟后解析为“res”参数的值。
 */
const delay = (time: number, res: any): Promise<any> => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(res);
    }, time);
  });
};

export { delay } ;
