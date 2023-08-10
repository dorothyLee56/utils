/**
 * “throttle”函数将给定函数的执行限制在指定的时间间隔内。
 * @param func - `func` 参数是一个将被限制的函数。它可以接受任意数量的参数，由扩展运算符“...args:any[]”表示。该函数最多每“wait”毫秒调用一次。
 * @param wait - “wait”参数是函数调用之间等待的毫秒数。它确定连续调用节流函数之间的最小时间间隔。
 * @param options - `options` 参数是一个可选对象，可以包含两个属性：
 * @returns 正在返回函数“throttled”。
 */
function throttle(
  func: (...args: any[]) => void,
  wait: number,
  options: ThrottleOptions = {}
): (...args: any[]) => void {
  let timeout: NodeJS.Timeout | null;
  let previous = 0;

  const { leading = true, trailing = true } = options;

  const throttled = (...args: any[]) => {
    const now = Date.now();
    if (!previous && !leading) {
      previous = now;
    }
    const remaining = wait - (now - previous);
    if (remaining <= 0 || remaining > wait) {
      if (timeout) {
        clearTimeout(timeout);
        timeout = null;
      }
      previous = now;
      func(...args);
    } else if (!timeout && trailing) {
      timeout = setTimeout(() => {
        previous = !leading ? 0 : Date.now();
        timeout = null;
        func(...args);
      }, remaining);
    }
  };

  return throttled;
}

function debounce(
  func: (...args: any[]) => void,
  wait: number,
  options: DebounceOptions = {}
): (...args: any[]) => void {
  let timeout: NodeJS.Timeout | null;

  const { immediate = false } = options;

  const debounced = (...args: any[]) => {
    if (timeout) {
      clearTimeout(timeout);
    }
    if (immediate && !timeout) {
      func(...args);
    }
    timeout = setTimeout(() => {
      if (!immediate) {
        func(...args);
      }
      timeout = null;
    }, wait);
  };

  return debounced;
}
