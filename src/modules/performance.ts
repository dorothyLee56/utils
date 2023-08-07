/**
 * debounce 函数会延迟函数的执行，直到自上次调用该函数以来已经过了一定的时间。
 * @param {Function} func - `func` 参数是您想要去抖的函数。这是在去抖延迟过去后将调用的函数。
 * @param {number} delay - “delay”参数是函数在上次调用后执行之前应等待的时间（以毫秒为单位）。
 * @returns debounce 函数返回一个新函数，该函数将在指定的“delay”周期过去后执行提供的“func”。
 */
function debounce(func: Function, delay: number): Function {
  let timer: NodeJS.Timeout;

  return function (...args: any[]) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}

/**
 * “throttle”函数通过确保给定函数在指定时间间隔内仅执行一次来限制调用给定函数的频率。
 * @param {Function} func - `func` 参数是您想要限制的函数。它是在指定的“间隔”内最多调用一次的函数。
 * @param {number} interval - “interval”参数是以毫秒为单位的时间间隔，指定调用“func”函数的频率。
 * @returns throttle 函数返回一个新函数，该函数包装了作为参数传递的原始函数。
 */
function throttle(func: Function, interval: number): Function {
  let lastTime = 0;

  return function (...args: any[]) {
    const now = Date.now();
    if (now - lastTime >= interval) {
      func.apply(this, args);
      lastTime = now;
    }
  };
}