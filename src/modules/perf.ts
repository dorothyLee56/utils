/**
 * “throttle”函数将给定函数的执行限制为每个指定的延迟周期执行一次。
 * @param {T} func - `func` 参数是一个函数，它接受任意数量的参数并且不返回任何内容。
 * @param {number} delay - “delay”参数是函数调用之间应该经过的时间量（以毫秒为单位）。
 * @returns throttle 函数返回一个新函数，该函数包装了作为参数传递的原始函数。
 */
function throttle<T extends (...args: any[]) => void>(func: T, delay: number) {
  let timer: NodeJS.Timeout | null = null;
  return function(this: ThisParameterType<T>, ...args: Parameters<T>) {
    if (!timer) {
      func.apply(this, args);
      timer = setTimeout(() => {
        timer = null;
      }, delay);
    }
  };
}

/**
 * “throttle”函数将给定函数的执行限制为每个指定的延迟周期执行一次。
 * @param {T} func - `func` 参数是一个函数，它接受任意数量的参数并且不返回任何内容。
 * @param {number} delay - “delay”参数是函数调用之间应该经过的时间量（以毫秒为单位）。
 * @returns throttle 函数返回一个新函数，该函数包装了作为参数传递的原始函数。
 */
function debounce<T extends (...args: any[]) => void>(func: T, delay: number) {
  let timer: NodeJS.Timeout | null = null;
  return function(this: ThisParameterType<T>, ...args: Parameters<T>) {
    clearTimeout(timer!); // 加上 ! 表示我们知道 timer 不会为 null
    timer = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}

export {
  debounce,
  throttle
}