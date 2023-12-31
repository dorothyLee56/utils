<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@q/utils](./utils.md) &gt; [throttle](./utils.throttle.md)

## throttle() function

“throttle”函数将给定函数的执行限制为每个指定的延迟周期执行一次。

**Signature:**

```typescript
declare function throttle<T extends (...args: any[]) => void>(func: T, delay: number): (this: ThisParameterType<T>, ...args: Parameters<T>) => void;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  func | T | <code>func</code> 参数是一个函数，它接受任意数量的参数并且不返回任何内容。 |
|  delay | number | “delay”参数是函数调用之间应该经过的时间量（以毫秒为单位）。 |

**Returns:**

(this: ThisParameterType&lt;T&gt;, ...args: Parameters&lt;T&gt;) =&gt; void

throttle 函数返回一个新函数，该函数包装了作为参数传递的原始函数。

