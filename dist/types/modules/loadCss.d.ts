/**
 * 加载css文件
 */
/**
 * `loadCss` 函数用于从给定的 URL 动态加载 CSS 文件，并返回一个 Promise，该 Promise 在 CSS 文件成功加载时解析，如果出现错误则拒绝。
 * @param {string} url - `url` 参数是一个字符串，表示要加载的 CSS 文件的 URL。
 * @returns 函数“loadCss”返回一个 Promise。
 */
declare function loadCss(url: string): Promise<any>;

export { loadCss };
